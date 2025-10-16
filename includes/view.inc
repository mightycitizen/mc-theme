<?php

/**
 * @file
 * Views-related hook implementations.
 */

function mc_theme_preprocess_views_view(&$variables) {
  $view = $variables['view'];
  // Look for a views argument with the format columns:<number>
  if ($view->id() == 'news' && !empty($view->args)) {
    foreach ($view->args as $arg) {
      if (preg_match('/^columns:(\\d+)$/', $arg, $matches)) {
        $columns = $matches[1];
        break;
      }
    }
  }
  // Otherwise set columns based on view mode
  if (!isset($variables['columns']) && !isset($columns)) {
    if ($row_plugin = $view->display_handler->getPlugin('row')) {
      if (array_key_exists('view_mode', $row_plugin->options)) {
        if ($row_plugin->options['view_mode'] == 'card') {
          $columns = 3;
        }
        elseif ($row_plugin->options['view_mode'] == 'card_featured') {
          $columns = 2;
        }
        else {
          $columns = 1;
        }
      }
    }
    if ($view->current_display == 'block_card') {
      $columns = 3;
    }
  }
  $variables['columns'] = $columns ?? 1;
  


  // Get selected values from exposed filters.
  // Used as "Selected filters" in secondary exposed form.
  $selected = array();

  foreach ($view->exposed_data as $key => $value) {
    if (is_array($value)) {
      $value = array_filter($value, function($value) {
        return $value != 0;
      });
        $selected[$key] = $value;
      
    }
  }

  // Uses the Better Exposed Filters "secondary" option to split the exposed form into two forms.
  // The primary "exposed" form will contain the typical views exposed filters.
  // Anything added to the "secondary" option will be moved to a separate form.
  // This allows the "exposed" and "secondary" forms to be split into two sections in the template.
  if (array_key_exists('secondary', $variables['exposed'])) {
    // Clone exposed form for secondary options.
    $variables['exposed']['#split_form'] = 'primary'; // used for theming
    $exposed = $variables['exposed'];
    $secondary = $exposed;

    // ==========
    // PRIMARY EXPOSED FORM
    // ==========
    // Remove secondary options from primary form.
    unset($variables['exposed']['secondary']);

    // Remove "Sort by" from primary form.
    unset($variables['exposed']['sort_by']);

    // Hide submit button in primary form.
    $variables['exposed']['actions']['submit']['#attributes']['class'][] = 'hidden';
    $variables['exposed']['#attributes']['class'][] = 'view-filter';

    // ==========
    // SECONDARY EXPOSED FORM
    // ==========
    // Remove reset button from secondary form, move actions to secondary fieldset.
    unset($secondary['actions']['reset']);
    $secondary['secondary']['actions'] = $secondary['actions'];
    unset($secondary['actions']);
    unset($secondary['filter_view_mode']);

    // Add selected filters to secondary form.
    $selected_options = array();
    foreach ($selected as $key => $value) {
      if (!empty($value)) {
        $selected_options[] = array_intersect_key($secondary[$key], $value);
      }
      unset($secondary[$key]);
    }
    if ($selected_options) {
      $secondary['selected'] = array(
        '#id' => 'selected-filters',
        '#name' => 'selected-filters',
        '#type' => 'checkboxes',
        '#title' => t('Selected filters'),
        '#title_display' => 'before',
        '#theme_wrappers' => ['bef_checkboxes'],
        '#bef_display_inline' => TRUE,
        '#attributes' => ['inline' => TRUE],
      );
      $secondary['selected'] = array_merge($secondary['selected'], $selected_options);
    }

    // Unique IDs for accessibility.
    $secondary['#id'] = $exposed['#id'] . '--secondary';
    $secondary['actions']['#id'] = $exposed['actions']['#id'] . '--secondary';
    $secondary['actions']['submit']['#id'] = $exposed['actions']['submit']['#id'] . '--secondary';

    // Update from details to fieldset.
    $secondary['#split_form'] = 'secondary'; // used for theming
    $secondary['#attributes']['class'][] = 'secondary-exposed-form';
    $secondary['#type'] = 'fieldset';
    $secondary['secondary']['#type'] = 'fieldset';
    $secondary['secondary']['#theme_wrappers'] = ['fieldset'];
    $secondary['secondary']['#attributes']['inline'] = TRUE;
  }

  // Make the `secondary` variable available to the template.
  $variables['secondary'] = $secondary ?? NULL;
}

function mc_theme_theme_suggestions_fieldset_alter(array &$suggestions, array $variables) {
  $element = $variables['element'];

  if (array_key_exists('#theme', $element) && $element['#theme'] == 'bef_checkboxes') {
    $suggestions[] = 'fieldset__bef_checkboxes';
  }

  if (array_key_exists('inline', $element['#attributes']) && $element['#attributes'] == TRUE) {
    $suggestions[] = 'fieldset__inline';
  }
}

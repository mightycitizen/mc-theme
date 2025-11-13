<?php

/**
 * @file
 * Paragraphs-related hook implementations.
 */

function mc_theme_preprocess_paragraph(&$variables){
  $entity = $variables['paragraph'];
  $variables['paragraph_id'] = $entity->id(); // for GraphQL
  $variables['section_id'] = 'component-' . $entity->id(); // for anchor links
}

/**
 * Implements hook_preprocess_paragraph__news_grid().
 * Passes card view mode and number of columns to the view via context.
 * @TODO: modify number of results based on view mode and columns.
 */
function mc_theme_preprocess_paragraph__news_grid(&$variables) {
  $paragraph = $variables['paragraph'];

  // View mode
  if ($paragraph->hasField('field_card_view_mode') && !$paragraph->get('field_card_view_mode')->isEmpty()) {
    $field_view_mode = $paragraph->get('field_card_view_mode')->value;
  }
  $view_mode = ($field_view_mode == 'card') ? 'card' : 'teaser_short';

  // Number of columns
  if ($paragraph->hasField('field_number_columns') && !$paragraph->get('field_number_columns')->isEmpty()) {
    $field_columns = $paragraph->get('field_number_columns')->value;
  }
  $columns = 'columns:' . ($field_columns ?? 3);

  // Build view arguments from taxonomy terms if needed.
  $view_args = [];
  if ($paragraph->hasField('field_news_topics') && !$paragraph->get('field_news_topics')->isEmpty()) {
    $terms = $paragraph->get('field_news_topics')->getValue();
    if (!empty($terms)) {
      $term_ids = array_map(function($item) { return $item['target_id']; }, $terms);
      $view_args[] = implode('+', $term_ids);
    }
  }
  if (empty($view_args)) {
    $view_args[] = 'all';
  }
  // Pass columns as the last argument to the view.
  $view_args[] = $columns;

  // Load and alter the view.
  $view = \Drupal\views\Views::getView('news');
  $output = '';
  if ($view) {
    $view->setDisplay('block_card');
    $view->setArguments($view_args);
    // Override the row plugin's view_mode.
    if ($row_plugin = $view->display_handler->getPlugin('row')) {
      if (is_array($row_plugin->options) && array_key_exists('view_mode', $row_plugin->options)) {
        $row_plugin->options['view_mode'] = $view_mode;
      }
    }
    $view->preExecute();
    $view->execute();
    $output = $view->render();
  }
  $variables['rendered_view'] = $output;
}

/**
 * Implements hook_preprocess_paragraph__news_grid_featured().
 * Gets the 5 latest sticky news items for the selected topics.
 */
function mc_theme_preprocess_paragraph__news_grid_featured(&$variables) {
  $paragraph = $variables['paragraph'];
  $news_items = [];

  // Get topic term IDs from field_news_topics.
  $term_ids = [];
  if ($paragraph->hasField('field_news_topics') && !$paragraph->get('field_news_topics')->isEmpty()) {
    $terms = $paragraph->get('field_news_topics')->getValue();
    $term_ids = array_map(function($item) { return $item['target_id']; }, $terms);
  }

  // Build entity query for sticky news nodes.
  $query = \Drupal::entityQuery('node')
    ->condition('type', 'news')
    ->condition('status', 1)
    ->condition('promote', 1)
    ->sort('created', 'DESC')
    ->range(0, 5)
    ->accessCheck(TRUE);
  if (!empty($term_ids)) {
    $query->condition('field_news_topics.target_id', $term_ids, 'IN');
  }
  $nids = $query->execute();

  if (!empty($nids)) {
    $storage = \Drupal::entityTypeManager()->getStorage('node');
    $news_items = $storage->loadMultiple($nids);
  }

  $variables['featured_news_items'] = $news_items;
}

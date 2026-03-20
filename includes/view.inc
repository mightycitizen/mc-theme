<?php

/**
 * @file
 * Views-related hook implementations.
 */

function mc_theme_theme_suggestions_fieldset_alter(array &$suggestions, array $variables) {
  $element = $variables['element'];

  if (array_key_exists('#theme', $element) && $element['#theme'] == 'bef_checkboxes') {
    $suggestions[] = 'fieldset__bef_checkboxes';
  }

  if (array_key_exists('inline', $element['#attributes']) && $element['#attributes'] == TRUE) {
    $suggestions[] = 'fieldset__inline';
  }
}

<?php

/**
 * @file
 * Block-related hook implementations.
 */

use Drupal\block\Entity\Block;
use Drupal\block_content\BlockContentInterface;
use Drupal\Core\Render\Markup;
use Drupal\node\Entity\Node;

function mc_theme_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  $content = $variables['elements']['content'];
  if (isset($content['#block_content']) and $content['#block_content'] instanceof BlockContentInterface) {
    $suggestions = [];
    $bundle = $content['#block_content']->bundle();
    $view_mode = $content['#view_mode'];
    $suggestions[] = 'block__' . $bundle;
    $suggestions[] = 'block__' . $view_mode;
    $suggestions[] = 'block__' . $bundle . '__' . $view_mode;
    if (!empty($variables['elements']['#id'])) {
      $suggestions[] = 'block__' . $variables['elements']['#id'];
    }
  }

  $plugin_id = $variables['elements']['#plugin_id'];
  if ($plugin_id == ('hero_block' || 'sidebar_block')) {
    $route = \Drupal::routeMatch()->getRouteName();
    if ($route == 'entity.node.canonical') {
      $node = \Drupal::routeMatch()->getParameter('node');
    }
    elseif ($route == 'entity.node.revision') {
      $node = \Drupal::routeMatch()->getParameter('node_revision');
    }
    elseif ($route == 'entity.node.preview') {
      $node = \Drupal::routeMatch()->getParameter('node_preview');
    }

    if (isset($node)) {
      $suggestions[] = 'block__' . $plugin_id . '__node';
      $suggestions[] = 'block__' . $plugin_id . '__node__' . $node->bundle();
    }
    elseif (strpos($route, 'sitewide_alert')) {
      $suggestions[] = 'block__' . $plugin_id . '__sitewide_alert';
    }
  }
}

function mc_theme_preprocess_block(&$variables) {
  if (in_array($variables['plugin_id'], ['hero_block', 'sidebar_block'])) {
    // Get region
    $block = Block::load($variables['elements']['#id']);
    $variables['region'] = $block ? $block->getRegion() : NULL;

    // Get node
    $route = \Drupal::routeMatch()->getRouteName();

    if ($route == 'entity.node.canonical') {
      $node = \Drupal::routeMatch()->getParameter('node');
    }
    elseif ($route == 'entity.node.revision') {
      $node = \Drupal::routeMatch()->getParameter('node_revision');
    }
    elseif ($route == 'entity.node.preview') {
      $node = \Drupal::routeMatch()->getParameter('node_preview');
    }
  }
  if (isset($node)) {
    $variables['entity'] = $node;
    $variables['node_id'] = $node->id();
    if ($node->hasField('field_links_5') && !$node->get('field_links_5')->isEmpty()) {
      $variables['links_bar'] = $node->field_links_5->getValue();
    }

    if ($node->hasField('field_locations_rooms') && !$node->get('field_locations_rooms')->isEmpty()) {
      $locations = [];
      $field_locations_rooms = $node->field_locations_rooms->getValue();
      $locations = _mc_theme_format_locations_rooms($field_locations_rooms);
      $variables['formatted_locations'] = $locations ?? NULL;
    }

    if ($node->hasField('field_addresses')) {
      $field_addresses = $node->field_addresses->getValue();
      $addresses = _mc_theme_format_address($field_addresses);
      $variables['formatted_addresses'] = $addresses ?? NULL;
    }

    if ($node->bundle() == 'event') {
      if ($node->hasField('field_address')) {
        $field_address = $node->field_address->getValue();
        $address = _mc_theme_format_address($field_address);
      }

      if ($node->hasField('field_location') && (!$node->field_location->isEmpty())) {
        $field_location = $node->field_location->getValue();
        if ($field_location[0]['target_id']) {
          $address = _mc_theme_format_location($field_location[0]['target_id']);
        }
      }
    }

    $variables['formatted_location'] = $address ?? NULL;
  }
}

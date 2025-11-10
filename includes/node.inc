<?php
/**
 * @file
 * Node-related hook implementations.
 */
use Drupal\Core\Render\Markup;
use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;

function mc_theme_preprocess_node(&$variables) {
  $node = $variables['node'];
  $elements = $variables['elements'];
  $view_mode = $variables['view_mode'];

  // Table of contents
  $table_of_contents = array();
  if ($node->hasField('field_components_primary')) {
    $field_components_primary = $node->field_components_primary->getValue();
    foreach ($field_components_primary as $key => $value) {
      if ($paragraph_id = $value['target_id']) {
        $paragraph = Paragraph::load($paragraph_id);
        $table_of_contents[] = _mc_theme_get_anchor_link($paragraph);
      }
    }
  }
  if ($node->hasField('field_components_secondary')) {
    $field_components_secondary = $node->field_components_secondary->getValue();
    foreach ($field_components_secondary as $key => $value) {
      if ($paragraph_id = $value['target_id']) {
        $paragraph = Paragraph::load($paragraph_id);
        $table_of_contents[] = _mc_theme_get_anchor_link($paragraph);
      }
    }
  }

  if ($node->hasField('field_show_table_of_contents') or $node->bundle() == 'program') {
    $variables['table_of_contents'] = $table_of_contents;
  }

  // Format addresses and locations
  if ($node->hasField('field_addresses')) {
    $field_addresses = $node->field_addresses->getValue();
    $addresses = _mc_theme_format_address($field_addresses);
    $variables['formatted_addresses'] = $addresses ?? NULL;
  }

  if ($node->hasField('field_address')) {
    $field_address = $node->field_address->getValue();
    $address = _mc_theme_format_address($field_address);
  }

  if ($node->hasField('field_location') && (!$node->field_location->isEmpty())) {
    $field_location = $node->field_location->getValue();
    // if ($field_location[0]['target_id']) {
    //   $address = _mc_theme_format_location($field_location[0]['target_id']);
    // }
  }

  $variables['formatted_location'] = $address ?? NULL;
}

function _mc_theme_get_anchor_link($paragraph) {
  if ($paragraph->hasField('field_intro') && !$paragraph->get('field_intro')->isEmpty()) {
    $intro_id = $paragraph->field_intro->target_id;
    if ($intro = Paragraph::load($intro_id)) {
      $anchor_title = $intro->get('field_anchor_title')->value;
      $heading = $intro->get('field_heading')->value;
    }
  }
  $anchor_title = $anchor_title ?? $heading;
  $anchor_link = $anchor_title ? [
    'url' => '#component-' . $paragraph->id(),
    'text' => $anchor_title ?? '',
  ] : NULL;
  return $anchor_link;
}

function _mc_theme_format_address($field_addresses) {
  $addresses = [];
  foreach ($field_addresses as $key => $value) {
    $address_formats = [];
    $parts = [];
    $address_line1 = $value['address_line1'] ?? NULL;
    $address_line2 = $value['address_line2'] ?? NULL;
    $city = $value['locality'] ?? NULL;
    $state = $value['administrative_area'] ?? NULL;
    $zip = $value['postal_code'] ?? NULL;
    $address_line3 = trim(implode(', ', array_filter([$city, $state, $zip])));
    if ($address_line1) { $parts[] = $address_line1; }
    if ($address_line2) { $parts[] = $address_line2; }
    if ($address_line3) { $parts[] = $address_line3; }
    if (!empty($parts)) {
      $address_formats['full'] = Markup::create(implode('<br>', $parts));
      $address_formats['inline'] = Markup::create(implode(', ', $parts));
    }
    $addresses[] = $address_formats;
  }

  return $addresses;
}

function _mc_theme_format_location($target_id) {
  $address_formats = [];
  if ($target_id) {
    $node_location = Node::load($target_id);
    if ($node_location->hasField('field_address') && (!$node_location->field_address->isEmpty())) {
      $field_address = $node_location->field_address->getValue();
      $address_formats = _mc_theme_format_address($field_address);
    }
  }
  return $address_formats;
}

function _mc_theme_format_locations_rooms($field_locations_rooms) {
  $address_formats = [];
  foreach ($field_locations_rooms as $key => $value) {
    $address = NULL;
    if ($value['location']) {
      $node_location = Node::load($value['location']);
      if ($node_location->hasField('field_address') && (!$node_location->field_address->isEmpty())) {
        $field_address = $node_location->field_address->getValue();
        $address = _mc_theme_format_address($field_address);
        $address = array_shift($address); // always single value
        $address['full'] = Markup::create(implode('<br>', [$node_location->label(), $address['full']])); // add location name to full format
      }
    }
    if ($value['room_number']) {
      // If the value contains digits only, add the word "Room"
      if (preg_match('/^\d+$/', $value['room_number'])) {
        $value['room_number'] = t('Room') . ' ' . $value['room_number'];
      }
      if (!empty($address)) {
        $address['full'] = Markup::create(implode('<br>', [$value['room_number'], $address['full']])); // add room number to full format
      }
      else {
        $address['full'] = $value['room_number'];
        $address['inline'] = $value['room_number'];
      }
    }
    $address_formats[] = $address;
  }
  return $address_formats;
}

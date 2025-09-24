<?php

use \Drupal\sitewide_alert\Entity\SitewideAlertInterface;
/**
 * @file
 * Alerts-related hook implementations.
 */

/**
 * Implements hook_theme_suggestions_HOOK().
 */
function mc_theme_theme_suggestions_sitewide_alert_alter(array &$suggestions, array $variables): array {
  /** @var \Drupal\sitewide_alert\Entity\SitewideAlertInterface $sitewide_alert */
  $sitewide_alert = $variables['elements']['#sitewide_alert'];
  $view_mode = $variables['elements']['#view_mode'];

  $suggestions[] = 'sitewide_alert__' . $view_mode;
  $suggestions[] = 'sitewide_alert__' . $view_mode . '__' . $sitewide_alert->getStyle();
  $suggestions[] = 'sitewide_alert__' . $view_mode . '__' . ($sitewide_alert->isDismissible() ? 'dismissible' : 'notdismissible');
  $suggestions[] = 'sitewide_alert__' . $view_mode . '__' . $sitewide_alert->getStyle() . '__' . ($sitewide_alert->isDismissible() ? 'dismissible' : 'notdismissible');

  return $suggestions;
}

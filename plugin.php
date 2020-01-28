<?php
/**
 * LDA\Projects
 *
 *
 * @package    MAGE\Comparison\Block
 * @since      0.1
 * @author     Maurice Tadros, Yaidel Ferralize, Disnel Rodriguez, Ernesto A. García
 * @link       https://bowriverstudio.com
 * @license    GNU-2.0+
 *
 * @wordpress-plugin
 * Plugin Name:    image-comparison-slider-block
 * Plugin Description: Image-comparison-slider-block.
 *
 * - Columns
 * - Column
 *
 */
namespace IMAGE\Comparison\Block;

if (!defined('ABSPATH')) {
    exit('Hello, Hello, Hello, what\'s going on here then?');
}

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
    return wp_normalize_path( trailingslashit(dirname( __FILE__ )));
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
    static $plugin_url;

    if ( empty( $plugin_url ) ) {
        $plugin_url = plugins_url( null, __FILE__ ) .'/';
    }

    return $plugin_url;
}

// Enqueue JS and CSS.
include __DIR__ . '/lib/register-scripts.php';

// Render Blocks
include __DIR__ . '/lib/render-blocks/lightbox.php';


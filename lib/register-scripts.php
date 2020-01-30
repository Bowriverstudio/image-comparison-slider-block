<?php
namespace IMAGE\Comparison\Block;

/**
 * Private function that returns a unque prefix for this plugin.
 *
 * @return string
 */
function _get_enqueue_prefix(){
    return 'image-comparison-slider-block';
}

add_action('enqueue_block_editor_assets', __NAMESPACE__.'\enqueue_block_editor_assets');
/**
 * Enqueue block scripts and styles in the admin editor only.
 */
function enqueue_block_editor_assets(){
    $build_url = _get_plugin_url() . 'build/';

    wp_enqueue_style(
        _get_enqueue_prefix() .'editor',
        $build_url . 'editor.css',
        '',
        filemtime(_get_plugin_directory() . 'build/editor.css')
    );

    $asset_file = include(_get_plugin_directory() . 'build/index.asset.php');
    wp_enqueue_script(
        _get_enqueue_prefix(). 'script',
        $build_url . 'index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_enqueue_style(
        _get_enqueue_prefix() .'style',
        $build_url . 'style.css',
        '',
        filemtime(_get_plugin_directory() . 'build/style.css')
    );
}

//add_action('enqueue_block_assets', 'enqueue_block_assets');
///**
// * Enqueue block scripts and styles in both the admin editor and frontend of the site.
// */
//function enqueue_block_assets(){
//
//    $asset_file = include(BeansTeamPluginPath . 'build/index.asset.php');
//    $build_url = plugin_dir_url( __FILE__ ) . 'build/';
//
//    wp_enqueue_script(
//        'beans-team-script',
//        $build_url . 'index.js',
//        $asset_file['dependencies'],
//        $asset_file['version']
//    );
//
//    wp_enqueue_style(
//        'beans-team-style',
//        $build_url . 'style.css',
//        '',
//        filemtime(BeansTeamPluginPath . 'build/style.css')
//
//    );
//}


add_action( 'wp_enqueue_scripts', __NAMESPACE__.'\enqueue_scripts' );
/**
 * Enqueue frontend only.
 */
function enqueue_scripts(){
    $asset_file = include(_get_plugin_directory() . 'build/frontend.asset.php');
    $build_url = _get_plugin_url() . 'build/';
    wp_enqueue_script(
        _get_enqueue_prefix() . '-frontend-script',
        $build_url . 'frontend.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_enqueue_style(
        _get_enqueue_prefix().'style',
        $build_url . 'style.css',
        '',
        filemtime(_get_plugin_directory() . 'build/style.css')
    );
}

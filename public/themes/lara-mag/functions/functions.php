<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Illuminate\Http\Request;

register_page_template([
    'default' => 'Default',
]);

register_sidebar([
    'id' => 'footer_sidebar',
    'name' => __('Footer sidebar'),
    'description' => __('This is footer sidebar section'),
]);

theme_option()
    ->setArgs(['debug' => true])
    ->setSection([
        'title' => __('General'),
        'desc' => __('General settings'),
        'id' => 'opt-text-subsection-general',
        'subsection' => true,
        'icon' => 'fa fa-home',
    ])
    ->setSection([
        'title' => __('Logo'),
        'desc' => __('Change logo'),
        'id' => 'opt-text-subsection-logo',
        'subsection' => true,
        'icon' => 'fa fa-image',
        'fields' => [
            [
                'id' => 'logo',
                'type' => 'mediaImage',
                'label' => __('Logo'),
                'attributes' => [
                    'name' => 'logo',
                    'value' => null,
                ],
            ],
        ],
    ])
    ->setSection([
        'title' => __('Banner Ads'),
        'desc' => __('Change image'),
        'id' => 'opt-text-subsection-banner-ads',
        'subsection' => true,
        'icon' => 'fa fa-image',
        'fields' => [
            [
                'id' => 'banner-link',
                'type' => 'text',
                'label' => __('URL'),
                'attributes' => [
                    'name' => 'banner-link',
                    'value' => null,
                    'options' => [
                        'class' => 'form-control',
                        'placeholder' => __('Link to target URL'),
                        'data-counter' => 255,
                    ],
                ],
            ],
            [
                'id' => 'banner-new-tab',
                'type' => 'select',
                'label' => __('Open in new tab?'),
                'attributes' => [
                    'name' => 'banner-new-tab',
                    'data' => [
                        0 => 'No',
                        1 => 'Yes',
                    ],
                    'value' => null,
                    'options' => [
                        'class' => 'form-control',
                    ],
                ],
            ],
            [
                'id' => 'banner-ads',
                'type' => 'mediaImage',
                'label' => __('Image'),
                'attributes' => [
                    'name' => 'banner-ads',
                    'value' => null,
                ],
            ],
        ],
    ])
    ->setField([
        'id' => 'copyright',
        'section_id' => 'opt-text-subsection-general',
        'type' => 'text',
        'label' => __('Copyright'),
        'attributes' => [
            'name' => 'copyright',
            'value' => '© 2016 Botble Technologies. All right reserved. Designed by Nghia Minh',
            'options' => [
                'class' => 'form-control',
                'placeholder' => __('Change copyright'),
                'data-counter' => 120,
            ],
        ],
        'helper' => __('Copyright on footer of site'),
    ]);

add_action(BASE_ACTION_META_BOXES, 'add_addition_fields_in_post_screen', 24, 3);

/**
 * @param $screen
 * @param $context
 * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
 */
function add_addition_fields_in_post_screen($screen, $context)
{
    if (is_plugin_active('blog') && $screen == POST_MODULE_SCREEN_NAME && $context == 'advanced') {
        add_meta_box('additional_post_fields', __('Addition Information'), 'post_additional_fields', $screen, $context, 'default');
    }
}

/**
 * @return mixed
 * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
 */
function post_additional_fields()
{
    $video_link = null;
    $args = func_get_args();
    if (!empty($args[0])) {
        $video_link = get_meta_data($args[0]->id, 'video_link', $args[1], true);
    }
    return Theme::partial('post-fields', compact('video_link'));
}

add_action(BASE_ACTION_AFTER_CREATE_CONTENT, 'save_addition_post_fields', 230, 3);
add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, 'save_addition_post_fields', 231, 3);

/**
 * @param $type
 * @param Request $request
 * @param $object
 * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
 */
function save_addition_post_fields($type, $request, $object)
{
    if (is_plugin_active('blog') && $type == POST_MODULE_SCREEN_NAME) {
        save_meta_data($object->id, 'video_link', $request->input('video_link'), $type);
    }
}
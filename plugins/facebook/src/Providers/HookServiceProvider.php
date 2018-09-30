<?php

namespace Botble\Facebook\Providers;

use Illuminate\Support\ServiceProvider;
use Theme;

class HookServiceProvider extends ServiceProvider
{
    /**
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * Boot the service provider.
     * @author Sang Nguyen
     */
    public function boot()
    {
        if (setting('facebook_add_script', true)) {
            add_filter(THEME_FRONT_FOOTER, [$this, 'registerFacebookScripts'], 1920);
        }
        if (setting('facebook_show_chat_box', true)) {
            add_filter(THEME_FRONT_FOOTER, [$this, 'registerFacebookChat'], 1921);
        }

        if (setting('facebook_access_token') && setting('facebook_auto_post_to_fan_page', 0) && env('FACEBOOK_USE_TOKEN', false)) {
            add_action(BASE_ACTION_META_BOXES, [$this, 'addFacebookBox'], 134, 3);
        }

        if (setting('facebook_use_comments', true)) {
            add_filter(BASE_FILTER_PUBLIC_COMMENT_AREA, [$this, 'addFacebookComments'], 137, 0);
        }
    }

    /**
     * @param string $html
     * @return string
     * @author Sang Nguyen
     * @throws \Throwable
     */
    public function registerFacebookScripts($html)
    {
        return $html . view('plugins.facebook::scripts')->render();
    }

    /**
     * @param string $html
     * @return string
     * @author Sang Nguyen
     * @throws \Throwable
     */
    public function registerFacebookChat($html)
    {
        return $html . view('plugins.facebook::chat')->render();
    }

    /**
     * @param $screen
     * @param $position
     * @param $object
     * @author Sang Nguyen
     */
    public function addFacebookBox($screen)
    {
        $args = func_get_args();
        if (count($args) == 2 || (count($args) == 3 && empty($args[2]))) {
            if (in_array($screen, config('facebook.screen_supported_auto_post', []))) {
                add_meta_box('facebook_box_wrap', trans('plugins.facebook::facebook.facebook_box_title'), [$this, 'facebookMetaField'], $screen, 'top', 'default');
            }
        }
    }

    /**
     * @author Sang Nguyen
     * @throws \Throwable
     */
    public function facebookMetaField()
    {
        return view('plugins.facebook::meta-box')->render();
    }

    /**
     * @param $view
     * @author Sang Nguyen
     * @throws \Throwable
     */
    public function addFacebookComments()
    {
        Theme::asset()->add('facebook-css', asset('/vendor/core/plugins/facebook/css/facebook.css'));
        return view('plugins.facebook::comments')->render();
    }
}

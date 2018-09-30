<?php

namespace Botble\Facebook\Providers;

use Botble\Base\Events\SessionStarted;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\Facebook\Widgets\FacebookWidget;
use Botble\Setting\Supports\SettingStore;
use Event;
use Illuminate\Support\ServiceProvider;
use Botble\Base\Supports\Helper;
use SammyK\LaravelFacebookSdk\LaravelFacebookSdkServiceProvider;

class FacebookServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    /**
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * @author Sang Nguyen
     */
    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');
    }

    /**
     * @author Sang Nguyen
     */
    public function boot()
    {
        $this->setIsInConsole($this->app->runningInConsole())
            ->setNamespace('plugins/facebook')
            ->loadAndPublishConfigurations(['general', 'permissions'])
            ->loadAndPublishTranslations()
            ->loadRoutes()
            ->loadAndPublishViews()
            ->publishAssetsFolder()
            ->publishPublicFolder();

        $config = $this->app->make('config');
        $setting = $this->app->make(SettingStore::class);

        if ($setting->get('facebook_enable')) {
            $this->app->register(HookServiceProvider::class);
            $this->app->register(EventServiceProvider::class);
        }

        Event::listen(SessionStarted::class, function () {
            dashboard_menu()->registerItem([
                'id' => 'cms-plugins-facebook',
                'priority' => 3,
                'parent_id' => 'cms-core-settings',
                'name' => __('Facebook'),
                'icon' => null,
                'url' => route('facebook.settings'),
                'permissions' => ['facebook.settings'],
            ]);
        });

        if (defined('POST_MODULE_SCREEN_NAME')) {
            $config->set('facebook.screen_supported_auto_post', array_merge($config->get('facebook.screen_supported_auto_post', []), [POST_MODULE_SCREEN_NAME]));
        }

        if (defined('PRODUCT_MODULE_SCREEN_NAME')) {
            $config->set('facebook.screen_supported_auto_post', array_merge($config->get('facebook.screen_supported_auto_post', []), [PRODUCT_MODULE_SCREEN_NAME]));
        }

        if (defined('WIDGET_MANAGER_MODULE_SCREEN_NAME')) {
            $this->app->booted(function () {
                register_widget(FacebookWidget::class);
            });
        }

        $config->set([
            'laravel-facebook-sdk' => [
                'facebook_config' => [
                    'app_id' => $setting->get('facebook_app_id', env('FACEBOOK_APP_ID')),
                    'app_secret' => $setting->get('facebook_app_secret', env('FACEBOOK_APP_SECRET')),
                    'default_graph_version' => 'v2.10',
                ],
                'default_redirect_uri' => '/auth/callback/facebook',
            ],
        ]);

        $this->app->register(LaravelFacebookSdkServiceProvider::class);
    }
}

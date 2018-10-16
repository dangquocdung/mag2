<?php

namespace Botble\SimpleSlider\Providers;

use Botble\Base\Events\SessionStarted;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\SimpleSlider\Models\SimpleSlider;
use Botble\SimpleSlider\Models\SimpleSliderItem;
use Botble\SimpleSlider\Repositories\Caches\SimpleSliderItemCacheDecorator;
use Botble\SimpleSlider\Repositories\Eloquent\SimpleSliderItemRepository;
use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderItemInterface;
use Event;
use Illuminate\Support\ServiceProvider;
use Botble\SimpleSlider\Repositories\Caches\SimpleSliderCacheDecorator;
use Botble\SimpleSlider\Repositories\Eloquent\SimpleSliderRepository;
use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderInterface;
use Botble\Support\Services\Cache\Cache;
use Botble\Base\Supports\Helper;
use Language;

class SimpleSliderServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    /**
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * @author Dung Thinh
     */
    public function register()
    {
        if (setting('enable_cache', false)) {
            $this->app->singleton(SimpleSliderInterface::class, function () {
                return new SimpleSliderCacheDecorator(new SimpleSliderRepository(new SimpleSlider()), new Cache($this->app['cache'], SimpleSliderRepository::class));
            });

            $this->app->singleton(SimpleSliderItemInterface::class, function () {
                return new SimpleSliderItemCacheDecorator(new SimpleSliderItemRepository(new SimpleSliderItem()), new Cache($this->app['cache'], SimpleSliderItemRepository::class));
            });
        } else {
            $this->app->singleton(SimpleSliderInterface::class, function () {
                return new SimpleSliderRepository(new SimpleSlider());
            });

            $this->app->singleton(SimpleSliderItemInterface::class, function () {
                return new SimpleSliderItemRepository(new SimpleSliderItem());
            });
        }

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    /**
     * @author Dung Thinh
     */
    public function boot()
    {
        $this->setIsInConsole($this->app->runningInConsole())
            ->setNamespace('plugins/simple-slider')
            ->loadAndPublishConfigurations(['permissions'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadRoutes()
            ->loadMigrations()
            ->publishAssetsFolder()
            ->publishPublicFolder();

        $this->app->register(HookServiceProvider::class);

        Event::listen(SessionStarted::class, function () {
            dashboard_menu()->registerItem([
                'id' => 'cms-plugins-simple-slider',
                'priority' => 100,
                'parent_id' => null,
                'name' => trans('plugins.simple-slider::simple-slider.menu'),
                'icon' => 'far fa-image',
                'url' => route('simple-slider.list'),
                'permissions' => ['simple-slider.list'],
            ]);
        });

        $this->app->booted(function () {
            if (defined('LANGUAGE_MODULE_SCREEN_NAME')) {
                Language::registerModule([SIMPLE_SLIDER_MODULE_SCREEN_NAME]);
            }
        });
    }
}

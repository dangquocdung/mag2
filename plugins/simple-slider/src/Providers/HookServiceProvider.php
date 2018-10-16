<?php

namespace Botble\SimpleSlider\Providers;

use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderInterface;
use Illuminate\Support\ServiceProvider;
use Theme;

class HookServiceProvider extends ServiceProvider
{
    /**
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * @author Dung Thinh
     */
    public function boot()
    {
        if (setting('simple_slider_using_assets', true) && defined('THEME_OPTIONS_MODULE_SCREEN_NAME')) {
            Theme::asset()
                ->container('footer')
                ->add('owl.carousel', 'vendor/core/plugins/simple-slider/packages/owl-carousel/owl.carousel.css')
                ->add('simple-slider-css', 'vendor/core/plugins/simple-slider/css/simple-slider.css')
                ->add('carousel', 'vendor/core/plugins/simple-slider/packages/owl-carousel/owl.carousel.js', ['jquery'])
                ->add('simple-slider-js', 'vendor/core/plugins/simple-slider/js/simple-slider.js', ['jquery']);
        }

        add_shortcode('simple-slider', __('Simple Slider'), __('Add a simple slider'), [$this, 'render']);

        add_filter(BASE_FILTER_AFTER_SETTING_CONTENT, [$this, 'addSettings'], 301, 1);
    }

    /**
     * @param $shortcode
     * @return null
     * @author Dung Thinh
     */
    public function render($shortcode)
    {
        $simple_slider = $this->app->make(SimpleSliderInterface::class)->getFirstBy([
            'key' => $shortcode->key,
            'status' => 1,
        ]);

        if (empty($simple_slider)) {
            return null;
        }

        return view('plugins.simple-slider::sliders', ['sliders' => $simple_slider->slider_items]);
    }

    /**
     * @param null $data
     * @return string
     * @throws \Throwable
     * @author Dung Thinh
     */
    public function addSettings($data = null)
    {
        return $data . view('plugins.simple-slider::setting')->render();
    }
}

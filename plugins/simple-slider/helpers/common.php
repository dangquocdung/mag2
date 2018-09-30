<?php

use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderInterface;

if (!function_exists('get_all_simple_sliders')) {
    /**
     * @param array $condition
     * @return mixed
     * @author Sang Nguyen
     */
    function get_all_simple_sliders(array $condition = [])
    {
        return app(SimpleSliderInterface::class)->allBy($condition);
    }
}
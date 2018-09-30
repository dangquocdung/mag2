<?php

namespace Botble\SimpleSlider\Models;

use Eloquent;

/**
 * Botble\SimpleSlider\Models\SimpleSliderItem
 *
 * @mixin \Eloquent
 */
class SimpleSliderItem extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'simple_slider_items';

    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'link',
        'image',
        'order',
        'simple_slider_id',
    ];
}

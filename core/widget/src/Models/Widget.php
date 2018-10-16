<?php

namespace Botble\Widget\Models;

use Eloquent;

/**
 * Botble\Widget\Models\WidgetArea
 *
 * @mixin \Eloquent
 */
class Widget extends Eloquent
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'widgets';

    protected $fillable = [
        'widget_id',
        'sidebar_id',
        'theme',
        'position',
        'data',
    ];

    /**
     * @param $value
     * @author Dung Thinh
     */
    public function setDataAttribute($value)
    {
        $this->attributes['data'] = json_encode($value);
    }

    /**
     * @param $value
     * @return mixed
     * @author Dung Thinh
     */
    public function getDataAttribute($value)
    {
        return json_decode($value, true);
    }
}

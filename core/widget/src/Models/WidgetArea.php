<?php

namespace Botble\Widget\Models;

use Eloquent;

/**
 * Botble\Widget\Models\WidgetArea
 *
 * @mixin \Eloquent
 */
class WidgetArea extends Eloquent
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'widget_areas';

    protected $fillable = ['belong_to', 'type', 'data'];

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

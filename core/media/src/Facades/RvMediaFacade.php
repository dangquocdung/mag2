<?php

namespace Botble\Media\Facades;

use Botble\Media\RvMedia;
use Illuminate\Support\Facades\Facade;

class RvMediaFacade extends Facade
{
    /**
     * @return string
     * @author Dung Thinh
     */
    protected static function getFacadeAccessor()
    {
        return RvMedia::class;
    }
}

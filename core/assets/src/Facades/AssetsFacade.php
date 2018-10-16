<?php

namespace Botble\Assets\Facades;

use Botble\Assets\Assets;
use Illuminate\Support\Facades\Facade;

/**
 * Class AssetsFacade
 * @package Botble\Assets\Facade
 * @author Dung Thinh
 * @since 22/07/2015 11:25 PM
 */
class AssetsFacade extends Facade
{

    /**
     * @return string
     * @author Dung Thinh
     */
    protected static function getFacadeAccessor()
    {
        return Assets::class;
    }
}

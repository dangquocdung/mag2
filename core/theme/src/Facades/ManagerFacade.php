<?php

namespace Botble\Theme\Facades;

use Botble\Theme\Manager;
use Illuminate\Support\Facades\Facade;

/**
 * Class ManagerFacade
 * @package Botble\Base
 */
class ManagerFacade extends Facade
{

    /**
     * @return string
     * @author Dung Thinh
     * @since 2.1
     */
    protected static function getFacadeAccessor()
    {
        return Manager::class;
    }
}

<?php

namespace Botble\Base\Facades;

use Botble\Base\Supports\AdminBreadcrumb;
use Illuminate\Support\Facades\Facade;

/**
 * Class AdminBreadcrumbFacade
 * @package Botble\Base
 */
class AdminBreadcrumbFacade extends Facade
{

    /**
     * @return string
     * @author Dung Thinh
     * @since 2.1
     */
    protected static function getFacadeAccessor()
    {
        return AdminBreadcrumb::class;
    }
}

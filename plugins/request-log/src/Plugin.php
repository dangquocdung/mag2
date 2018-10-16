<?php

namespace Botble\RequestLog;

use Botble\Base\Interfaces\PluginInterface;
use Botble\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use Schema;

class Plugin implements PluginInterface
{
    /**
     * @author Dung Thinh
     */
    public static function activate()
    {
    }

    /**
     * @author Dung Thinh
     */
    public static function deactivate()
    {
    }

    /**
     * @author Dung Thinh
     */
    public static function remove()
    {
        Schema::dropIfExists('request_logs');
        app(DashboardWidgetInterface::class)->deleteBy(['name' => 'widget_request_errors']);
    }
}

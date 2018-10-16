<?php

namespace Botble\MaintenanceMode;

use Schema;
use Botble\Base\Interfaces\PluginInterface;

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
        Schema::dropIfExists('maintenance_modes');
    }
}
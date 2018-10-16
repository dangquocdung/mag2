<?php

namespace Botble\Contact;

use Botble\Base\Interfaces\PluginInterface;
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
        Schema::dropIfExists('contacts');
    }
}

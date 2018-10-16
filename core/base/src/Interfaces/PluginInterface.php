<?php

namespace Botble\Base\Interfaces;

interface PluginInterface
{

    /**
     * @author Dung Thinh
     */
    public static function activate();

    /**
     * @author Dung Thinh
     */
    public static function deactivate();

    /**
     * @author Dung Thinh
     */
    public static function remove();
}

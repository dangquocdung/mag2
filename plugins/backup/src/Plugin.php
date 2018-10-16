<?php

namespace Botble\Backup;

use Botble\Base\Interfaces\PluginInterface;
use File;

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
        $backup_path = storage_path('app/backup');
        if (File::isDirectory($backup_path)) {
            File::deleteDirectory($backup_path);
        }
    }
}

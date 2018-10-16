<?php

if (!function_exists('get_backup_size')) {
    /**
     * @param $key
     * @return int
     * @author Dung Thinh
     */
    function get_backup_size($key)
    {
        $size = 0;

        foreach (File::allFiles(storage_path('app/backup/' . $key)) as $file) {
            $size += $file->getSize();
        }

        return $size;
    }
}

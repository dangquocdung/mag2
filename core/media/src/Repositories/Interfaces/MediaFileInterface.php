<?php

namespace Botble\Media\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface MediaFileInterface extends RepositoryInterface
{
    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getSpaceUsed();

    /**
     * @return mixed
     */
    public function getSpaceLeft();

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getQuota();

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getPercentageUsed();

    /**
     * @param $name
     * @param $folder
     * @author Dung Thinh
     */
    public function createName($name, $folder);

    /**
     * @param $name
     * @param $extension
     * @param $folder
     * @author Dung Thinh
     */
    public function createSlug($name, $extension, $folder);

    /**
     * @param $folderId
     * @param array $params
     * @param bool $withFolders
     * @param array $folderParams
     * @return mixed
     */
    public function getFilesByFolderId($folderId, array $params = [], $withFolders = true, $folderParams = []);

    /**
     * @param $folder_id
     * @param array $params
     * @return mixed
     */
    /**
     * @param $folderId
     * @param array $params
     * @param bool $withFolders
     * @param array $folderParams
     * @return mixed
     */
    public function getTrashed($folderId, array $params = [], $withFolders = true, $folderParams = []);

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function emptyTrash();
}

<?php

namespace Botble\Blog\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface TagInterface extends RepositoryInterface
{

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getDataSiteMap();

    /**
     * @param int $limit
     * @return mixed
     * @author Dung Thinh
     */
    public function getPopularTags($limit);

    /**
     * @param bool $active
     * @return mixed
     * @author Dung Thinh
     */
    public function getAllTags($active = true);
}

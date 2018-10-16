<?php

namespace Botble\Page\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface PageInterface extends RepositoryInterface
{

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getDataSiteMap();

    /**
     * @param $limit
     * @author Dung Thinh
     */
    public function getFeaturedPages($limit);

    /**
     * @param $array
     * @param array $select
     * @return mixed
     * @author Dung Thinh
     */
    public function whereIn($array, $select = []);

    /**
     * @param $query
     * @param int $limit
     * @return mixed
     * @author Dung Thinh
     */
    public function getSearch($query, $limit = 10);

    /**
     * @param bool $active
     * @return mixed
     * @author Dung Thinh
     */
    public function getAllPages($active = true);
}

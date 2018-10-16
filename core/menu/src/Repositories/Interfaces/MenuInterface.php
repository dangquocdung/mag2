<?php

namespace Botble\Menu\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface MenuInterface extends RepositoryInterface
{

    /**
     * @param $slug
     * @param $active
     * @param $selects
     * @return mixed
     * @author Dung Thinh
     */
    public function findBySlug($slug, $active, $selects = []);

    /**
     * @param $name
     * @return mixed
     * @author Dung Thinh
     */
    public function createSlug($name);
}

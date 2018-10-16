<?php

namespace Botble\ACL\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface RoleInterface extends RepositoryInterface
{
    /**
     * @param $name
     * @param $id
     * @return mixed
     * @author Dung Thinh
     */
    public function createSlug($name, $id);
}

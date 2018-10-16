<?php

namespace Botble\ACL\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface UserInterface extends RepositoryInterface
{

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getDataSiteMap();

    /**
     * Get unique username from email
     *
     * @param $email
     * @return string
     * @author Dung Thinh
     */
    public function getUniqueUsernameFromEmail($email);
}

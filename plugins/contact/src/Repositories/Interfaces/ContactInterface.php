<?php

namespace Botble\Contact\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface ContactInterface extends RepositoryInterface
{
    /**
     * @param array $select
     * @return mixed
     * @author Dung Thinh
     */
    public function getUnread($select = ['*']);

    /**
     * @return int
     * @author Dung Thinh
     */
    public function countUnread();
}

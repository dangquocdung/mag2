<?php

namespace Botble\Gallery\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface GalleryInterface extends RepositoryInterface
{

    /**
     * Get all galleries.
     *
     * @return mixed
     * @author Dung Thinh
     */
    public function getAll();

    /**
     * @return mixed
     * @author Dung Thinh
     */
    public function getDataSiteMap();

    /**
     * @param $limit
     * @author Dung Thinh
     */
    public function getFeaturedGalleries($limit);
}

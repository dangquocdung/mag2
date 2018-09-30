<?php

namespace Botble\SimpleSlider\Repositories\Caches;

use Botble\SimpleSlider\Repositories\Interfaces\SimpleSliderItemInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;
use Botble\Support\Services\Cache\CacheInterface;

class SimpleSliderItemCacheDecorator extends CacheAbstractDecorator implements SimpleSliderItemInterface
{
    /**
     * @var SimpleSliderItemInterface
     */
    protected $repository;

    /**
     * @var CacheInterface
     */
    protected $cache;

    /**
     * SimpleSliderCacheDecorator constructor.
     * @param SimpleSliderItemInterface $repository
     * @param CacheInterface $cache
     * @author Sang Nguyen
     */
    public function __construct(SimpleSliderItemInterface $repository, CacheInterface $cache)
    {
        $this->repository = $repository;
        $this->cache = $cache;
    }
}

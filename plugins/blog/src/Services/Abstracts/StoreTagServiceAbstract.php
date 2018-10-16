<?php

namespace Botble\Blog\Services\Abstracts;

use Botble\Blog\Models\Post;
use Botble\Blog\Repositories\Interfaces\TagInterface;
use Illuminate\Http\Request;

abstract class StoreTagServiceAbstract
{
    /**
     * @var TagInterface
     */
    protected $tagRepository;

    /**
     * StoreTagService constructor.
     * @param TagInterface $tagRepository
     * @author Dung Thinh
     */
    public function __construct(TagInterface $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    /**
     * @param Request $request
     * @param Post $post
     * @return mixed
     * @author Dung Thinh
     */
    abstract public function execute(Request $request, Post $post);
}

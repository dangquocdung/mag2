<section class="featured-home-post">
    <section class="container">
        @if (is_plugin_active('blog'))
            @foreach(get_featured_posts(5) as $post)
                <section class="featured-home-post-item thumb-full fleft">
                    <img src="{{ get_object_image($post->image) }}"
                         class="attachment-full size-full wp-post-image" alt="{{ $post->name }}"/>
                    <section class="featured-home-post-item-info bsize">
                        <h2 class="featured-home-post-item-title">
                            <a href="{{ route('public.single', $post->slug) }}">{{ $post->name }}</a>
                        </h2><!-- end .featured-home-post-item-title -->
                        <section class="featured-home-post-item-date">
                            <span><i class="fa fa-calendar" aria-hidden="true"></i>{{ date_from_database($post->created_at, 'Y-m-d') }}</span>
                        </section><!-- end .featured-home-post-item-date -->
                        <section class="featured-home-post-item-des">
                            {{ str_limit($post->description, 80) }}
                        </section><!-- end .featured-home-post-item-des -->
                    </section><!-- end .featured-home-post-item-info -->
                </section><!-- end .featured-home-post-item -->
            @endforeach
        @endif
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .featured-home-post -->
</section><!-- end .featured-home-post -->

<section class="home-wrap">
    <section class="container">
        <section class="primary fleft">
            @if (is_plugin_active('simple-slider'))
                {!! do_shortcode('[simple-slider key="home-slider"]') !!}
            @endif

            @if (is_plugin_active('blog'))
                @foreach (get_all_categories(['categories.status' => 1, 'categories.parent_id' => 0, 'featured' => 1]) as $category)
                    @php
                        $allRelatedCategoryIds = array_unique(array_merge(app(\Botble\Blog\Repositories\Interfaces\CategoryInterface::class)->getAllRelatedChildrenIds($category), [$category->id]));

                        $post_categories = app(\Botble\Blog\Repositories\Interfaces\PostInterface::class)->getByCategory($allRelatedCategoryIds, 0, 6);
                    @endphp
                    <section class="block-post-wrap-item block-post1-wrap-item fleft bsize">
                    <section class="block-post-wrap-head sidebar-item-head tf">
                        <a class="white-space" href="{{ route('public.single', $category->slug) }}">
                            <span><i class="fa fa-tags" aria-hidden="true"></i>{{ $category->name }}</span>
                        </a>
                    </section><!-- end .sidebar-item-head -->
                    <section class="block-post-wrap-content">
                        @foreach($post_categories as $post_category)
                            @if ($loop->index < 3)
                                <section class="post1-item fleft">
                                    <a class="post1-item-thumb thumb-full item-thumbnail"
                                       href="{{ route('public.single', $post_category->slug) }}">
                                        <img src="{{ get_object_image($post_category->image) }}"
                                             class="attachment-full size-full wp-post-image" alt="{{ $post_category->name }}"/>
                                        <div class="thumbnail-hoverlay main-color-1-bg"></div>
                                        <div class="thumbnail-hoverlay-icon"><i class="fa fa-search"></i></div>
                                    </a><!-- end .post1-item-thumb -->
                                    <section class="post1-item-info">
                                        <h2 class="post1-item-title">
                                            <a class="white-space"
                                               href="{{ route('public.single', $post_category->slug) }}">{{ $post_category->name }}</a>
                                        </h2><!-- end .post1-item-title -->
                                        <section class="post1-item-des">
                                            {{ $post_category->description }}
                                        </section><!-- end .post1-item-des -->
                                    </section><!-- end .post1-item-info -->
                                </section><!-- end .post1-item -->
                            @endif
                        @endforeach
                        <section class="cboth post1-item-bottom"></section><!-- end .cboth -->
                        @foreach($post_categories as $post_category)
                            @if ($loop->index >= 3)
                             <h2 class="post1-item-list">
                                <a class="white-space"
                                   href="{{ route('public.single', $post_category->slug) }}"><i
                                            class="fa fa-caret-right" aria-hidden="true"></i>{{ $post_category->name }}</a>
                            </h2><!-- end .post1-item-list -->
                            @endif
                        @endforeach
                    </section><!-- end .block-post-wrap-content -->
                </section><!-- end .block-post-wrap -->
                @endforeach
            @endif
            @if (function_exists('get_galleries'))
                @php $galleries = get_galleries(8); Gallery::registerAssets(); @endphp
                @if (!$galleries->isEmpty())
                        <section class="block-post-wrap-item block-post1-wrap-item fleft bsize" style="width: 100%;">
                        <section class="block-post-wrap-head sidebar-item-head tf">
                            <span><i class="fa fa-tags" aria-hidden="true"></i>{{ trans('plugins.gallery::gallery.galleries') }}</span>
                        </section><!-- end .sidebar-item-head -->
                            <section class="block-post-wrap-content">
                                <div class="gallery-wrap">
                                    @foreach ($galleries as $gallery)
                                        <div class="gallery-item">
                                            <div class="img-wrap">
                                                <a href="{{ route('public.gallery', $gallery->slug) }}"><img src="{{ get_object_image($gallery->image, 'medium') }}" alt="{{ $gallery->name }}"></a>
                                            </div>
                                            <div class="gallery-detail">
                                                <div class="gallery-title"><a href="{{ route('public.gallery', $gallery->slug) }}">{{ $gallery->name }}</a></div>
                                                <div class="gallery-author">{{ __('Posted At') }}: {{ date_from_database($gallery->created_at, 'Y-m-d') }}</div>
                                            </div>
                                        </div>
                                    @endforeach
                                    <div class="cboth"></div>
                                </div>
                            </section>
                        </section>
                    </section>
                @endif
            @endif
        </section><!-- end .primary -->
        <aside class="sidebar fright">
            {!! dynamic_sidebar('primary_sidebar') !!}
        </aside><!-- end .sidebar -->
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .container -->
</section><!-- end .home-wrap -->
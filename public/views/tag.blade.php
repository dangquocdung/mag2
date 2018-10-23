<section class="sub-page">
    <section class="container">
        <section class="primary fleft">
            <section class="block-archive-head">
                <span class="tf"><i class="fa fa-tags" aria-hidden="true"></i>{{ __('Tag') }}: {{ $tag->name }}</span>
            </section><!-- end .block-archive-head -->

            <section class="archive-pro-wrap">
                <ul>
                    @foreach($posts as $post_tag)
                        <section class="new-item bsize">
                            <a class="new-item-thumb thumb-full fleft item-thumbnail" href="{{ route('public.single', $post_tag->slug) }}">
                                <img src="{{ get_object_image($post_tag->image) }}" class="attachment-full size-full wp-post-image" alt="{{ $post_tag->name }}">
                                <div class="thumbnail-hoverlay main-color-1-bg"></div>
                                <div class="thumbnail-hoverlay-icon"><i class="fa fa-search"></i></div>
                            </a><!-- end .new-item-thumb -->
                            <section class="new-item-info">
                                <h2 class="new-item-title post1-item-title">
                                    <a href="{{ route('public.single', $post_tag->slug)  }}">{{ $post_tag->name }}</a>
                                </h2><!-- end .new-item-title -->
                                <section class="new-item-date">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>{{ __('Posted At') }}: {{ date_from_database($post_tag->created_at, 'Y-m-d') }}
                                </section><!-- end .new-item-date -->
                                <section class="new-item-des">
                                    {{ $post_tag->description }}
                                </section><!-- end .new-item-des -->
                                <section class="new-item-morelink">
                                    <a href="{{ route('public.single', $post_tag->slug) }}">{{ __('View more') }}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                </section><!-- end .new-item-morelink -->
                            </section><!-- end .new-item-info -->
                            <section class="cboth"></section><!-- end .cboth -->
                        </section><!-- end .new-item -->
                    @endforeach
                </ul>
            </section><!-- end .archive-pro-wrap -->

            @if ($posts->count() > 0)
                <section class="pagination">
                    {!! $posts->links() !!}
                </section><!-- end .pagination -->
            @endif
        </section><!-- end .primary -->
        <aside class="sidebar fright">
            {!! dynamic_sidebar('primary_sidebar') !!}
        </aside><!-- end .sidebar -->
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .container -->
</section>
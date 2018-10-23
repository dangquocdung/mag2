@if ($posts->count() > 0)
    <section class="archive-featured-new">
        @foreach ($posts as $post_category)
            @if ($loop->index < 3)
                <a class="featured-new-item fleft thumb-full item-thumbnail" href="{{ route('public.single', $post_category->slug) }}">
                    <img src="{{ get_object_image($post_category->image) }}" class="attachment-full size-full wp-post-image" alt="{{ $post_category->name }}">
                    <h2 class="featured-new-item-title white-space bsize">
                        {{ $post_category->name }}
                    </h2><!-- end .featured-new-item-title -->
                    <div class="thumbnail-hoverlay main-color-1-bg"></div>
                    <div class="thumbnail-hoverlay-icon"><i class="fa fa-search"></i></div>
                </a><!-- end .featured-new-item -->
            @endif
        @endforeach
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .archive-featured-new -->

    <section class="archive-pro-wrap">
        <ul>
            @foreach($posts as $post_category)
                @if ($loop->index >= 3)
                    <section class="new-item bsize">
                        <a class="new-item-thumb thumb-full fleft item-thumbnail" href="{{ route('public.single', $post_category->slug) }}">
                            <img src="{{ get_object_image($post_category->image) }}" class="attachment-full size-full wp-post-image" alt="{{ $post_category->name }}">
                            <div class="thumbnail-hoverlay main-color-1-bg"></div>
                            <div class="thumbnail-hoverlay-icon"><i class="fa fa-search"></i></div>
                        </a><!-- end .new-item-thumb -->
                        <section class="new-item-info">
                            <h2 class="new-item-title post1-item-title">
                                <a href="{{ route('public.single', $post_category->slug)  }}">{{ $post_category->name }}</a>
                            </h2><!-- end .new-item-title -->
                            <section class="new-item-date">
                                <i class="fa fa-calendar" aria-hidden="true"></i>{{ __('Posted At') }}: {{ date_from_database($post_category->created_at, 'Y-m-d') }}
                            </section><!-- end .new-item-date -->
                            <section class="new-item-des">
                                {{ $post_category->description }}
                            </section><!-- end .new-item-des -->
                            <section class="new-item-morelink">
                                <a href="{{ route('public.single', $post_category->slug) }}">{{ __('View more') }}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </section><!-- end .new-item-morelink -->
                        </section><!-- end .new-item-info -->
                        <section class="cboth"></section><!-- end .cboth -->
                    </section><!-- end .new-item -->
                @endif
            @endforeach
        </ul>
    </section><!-- end .archive-pro-wrap -->

    <section class="pagination">
        {!! $posts->links() !!}
    </section><!-- end .pagination -->
@endif
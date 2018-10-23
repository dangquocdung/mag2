<section class="sub-page">
    <section class="container">
        <section class="primary fleft">
            <section class="block-breakcrumb">
                <span xmlns:v="http://rdf.data-vocabulary.org/#"><span typeof="v:Breadcrumb"><a href="{{ route('public.index') }}" rel="v:url" property="v:title">{{ __('Home') }}</a> / <span class="breadcrumb_last">{{ $post->name }}</span></span></span>
            </section><!-- end .block-breakcrumb -->
            <h1 class="single-title">
                {{ $post->name }}
            </h1><!-- end .single-pro-title -->
            <section class="single-content">
                @if ($post->format_type == 'video')
                    @php $url = str_replace('watch?v=', 'embed/', get_meta_data($post->id, 'video_link', POST_MODULE_SCREEN_NAME, true)); @endphp
                    @if (!empty($url))
                        <div class="embed-responsive embed-responsive-16by9 mb30">
                            <iframe class="embed-responsive-item" allowfullscreen frameborder="0" height="315" width="420" src="{{ str_replace('watch?v=', 'embed/', $url) }}"></iframe>
                        </div>
                        <br>
                    @endif
                @endif
                @if (defined('GALLERY_MODULE_SCREEN_NAME') && !empty($galleries = gallery_meta_data($post->id, POST_MODULE_SCREEN_NAME)))
                    {!! render_object_gallery($galleries, ($post->categories()->first() ? $post->categories()->first()->name : __('Uncategorized'))) !!}
                @endif
                {!! $post->content !!}
                <br>
                <div class="list-tag">
                    @if (!$post->tags->isEmpty())
                        <span>
                            <span class="tag-list-title">{{ __('Tags') }}: </span>
                            @foreach ($post->tags as $tag)
                                <a href="{{ route('public.tag', $tag->slug) }}">{{ $tag->name }}</a>
                            @endforeach
                        </span>
                    @endif
                </div>
            </section><!-- end .single-pro-content -->
            <section class="single-comment">
                <section class="block-archive-head">
                    <section class="box-share fright">
                        <div class="addthis_inline_share_toolbox_pjup"></div>
                    </section><!-- end .box-share-->
                    <section class="cboth"></section>
                </section><!-- end .block-archive-head -->
                <section class="single-comment-content">
                    {!! apply_filters(BASE_FILTER_PUBLIC_COMMENT_AREA, null) !!}
                </section><!-- end .single-comment-content -->
            </section><!-- end .single-comment -->
            <section class="single-pro-related">
                <section class="block-archive-head">
                    <span class="tf"><i class="fa fa-newspaper-o" aria-hidden="true"></i>{{ __('Related posts') }}</span>
                </section><!-- end .block-archive-head -->
                <section class="block-content single-new-related-content">
                    <section class="">
                        <ul>
                            @foreach (get_related_posts($post->slug, 5) as $related_item)
                            <li class="post1-item-list">
                                <a href="{{ route('public.single', $related_item->slug) }}"><i class="fa fa-caret-right" aria-hidden="true"></i>{{ $related_item->name }}</a>
                            </li>
                            @endforeach
                        </ul>
                    </section><!-- end .featured-pro-wrap -->
                </section><!-- end .block-content -->
            </section><!-- end .single-pro-related -->
        </section><!-- end .primary -->
        <aside class="sidebar fright">
            {!! dynamic_sidebar('primary_sidebar') !!}
        </aside><!-- end .sidebar -->
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .container -->
</section>
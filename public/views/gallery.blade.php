<section class="sub-page">
    <section class="container">
        <section class="primary fleft">
            <section class="block-breakcrumb">
                <span xmlns:v="http://rdf.data-vocabulary.org/#"><span typeof="v:Breadcrumb"><a href="{{ route('public.index') }}" rel="v:url" property="v:title">{{ __('Home') }}</a> / <span class="breadcrumb_last">{{ $gallery->name }}</span></span></span>
            </section><!-- end .block-breakcrumb -->
            <h1 class="single-title">
                {{ $gallery->name }}
            </h1><!-- end .single-pro-title -->
            <section class="single-content">
                <p>{{ $gallery->description }}</p>
                <div id="list-photo">
                    @php
                        $images = gallery_meta_data($gallery->id, 'gallery');
                    @endphp
                    @if (!empty($images))
                        @foreach ($images as $image)
                            @if ($image)
                                <div class="item" data-src="{{ url(array_get($image, 'img')) }}" data-sub-html="{{ array_get($image, 'description') }}">
                                    <div class="photo-item">
                                        <div class="thumb">
                                            <a href="#">
                                                <img src="{{ url(array_get($image, 'img')) }}" alt="{{ array_get($image, 'description') }}">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    @endif
                </div>
                <br>
                <section class="single-comment-content">
                    {!! apply_filters(BASE_FILTER_PUBLIC_COMMENT_AREA, null) !!}
                </section><!-- end .single-comment-content -->
            </section><!-- end .single-pro-content -->
        </section><!-- end .primary -->
        <aside class="sidebar fright">
            {!! dynamic_sidebar('primary_sidebar') !!}
        </aside><!-- end .sidebar -->
        <section class="cboth"></section><!-- end .cboth -->
    </section><!-- end .container -->
</section>
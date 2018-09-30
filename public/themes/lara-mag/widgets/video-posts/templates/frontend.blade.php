@if (is_plugin_active('blog'))
    @if ($sidebar == 'footer_sidebar')
        <section class="footer-item">
            <section class="footer-item-head">
                <span>{{ __($config['name']) }}</span>
            </section><!-- end .footer-item-head -->
            <section class="footer-item-content">
    @else
        <section class="sidebar-item">
            <section class="sidebar-item-head tf">
                <span><i class="fa fa-video-camera" aria-hidden="true"></i>{{ __($config['name']) }}</span>
            </section><!-- end .sidebar-item-head -->
            <section class="sidebar-item-content">
    @endif
            @foreach(get_popular_posts($config['number_display'], ['where' => ['status' => 1, 'format_type' => 'video']]) as $post)
                <a class="sidebar-video-item form-popup thumb-full fleft" href="#video-popup-{{ $post->id }}" rel="video-popup">
                    <img src="{{ get_object_image($post->image, 'thumb') }}"
                         class="attachment-full size-full wp-post-image" alt="{{ $post->name }}"/> <i class="fa fa-play" aria-hidden="true"></i>
                    <section class="popup-hidden">
                        <section id="video-popup-{{ $post->id }}" class="sidebar-video-item-popup">
                            <p>
                                <iframe src="{{ str_replace('watch?v=', 'embed/', get_meta_data($post->id, 'video_link', POST_MODULE_SCREEN_NAME, true)) }}" width="560" height="315"
                                        frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                            </p>
                        </section><!-- end .sidebar-video-item-poup -->
                    </section><!-- end .popup-hidden -->
                </a><!-- end .sidebar-video-item -->
            @endforeach
            <section class="cboth"></section><!-- end .cboth -->
        </section><!-- end .sidebar-item-contentt -->
    </section><!-- end .sidebar-item -->
@endif
@if (!empty($config['facebook_name']) && !empty($config['facebook_url']))
    @if ($sidebar == 'footer_sidebar')
        <section class="footer-item">
            <section class="footer-item-head">
                <span>{{ __($config['name']) }}</span>
            </section><!-- end .footer-item-head -->
            <section class="footer-item-content">
@else
    <section class="sidebar-item">
        <section class="sidebar-item-head tf">
            <span><i class="fa fa-newspaper-o" aria-hidden="true"></i>{{ __($config['name']) }}</span>
        </section><!-- end .sidebar-item-head -->
        <section class="sidebar-item-content">
@endif
            <div class="fb-page" data-href="{{ $config['facebook_url'] }}" data-small-header="false"
                 data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="{{ $config['facebook_url'] }}" class="fb-xfbml-parse-ignore"><a
                            href="{{ $config['facebook_url'] }}">{{ $config['facebook_name'] }}</a></blockquote>
            </div>
        </section>
    </section>
@endif
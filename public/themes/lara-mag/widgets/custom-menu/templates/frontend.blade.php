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
        {!!
            Menu::generateMenu([
                'slug' => $config['menu_id'],
                'options' => ['class' => 'menu' ]
            ])
        !!}
    </section><!-- end .footer-item-content -->
</section><!-- end .footer-item -->
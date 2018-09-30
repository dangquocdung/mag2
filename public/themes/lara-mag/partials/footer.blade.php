<footer class="footer">
    <section class="footer-top">
        <section class="container">
            {!! dynamic_sidebar('footer_sidebar') !!}
            <section class="cboth"></section><!-- end .cboth -->
        </section><!-- end .container -->
    </section><!-- end .dooter-top -->
    <section class="footer-bottom">
        <section class="container">
            <section class="footer-bottom-left fleft">
                {{ theme_option('copyright') }}
            </section><!-- end  .footer-bottom-left -->
            <section class="footer-bottom-right fright">
                {!!
                    Menu::generateMenu([
                        'slug' => 'footer-menu',
                        'options' => ['id' => 'menu-footer-right-menu', 'class' => 'menu'],
                        'theme' => true,
                    ])
                !!}
            </section><!-- end .footer-bottom-right -->
            <section class="cboth"></section><!-- end .cboth -->
        </section><!-- end .container -->
    </section><!-- end .footer-bottom -->
</footer><!-- end .footer -->
<!--<section class="icon-back-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</section>-->
<!-- end .icon-back-top -->

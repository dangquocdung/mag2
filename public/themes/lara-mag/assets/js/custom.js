$(document).ready(function () {
    // Collap Main NAv.
    $('.collap-main-nav, .close-nav').on('click', function () {
        $('.main-nav').toggleClass('main-nav-active');
    });

    // Toggle Icon.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.icon-back-top').addClass('icon-back-top-active');
        }
        else {
            $('.icon-back-top').removeClass('icon-back-top-active');
        }
    });

    // Back Top.
    $('.icon-back-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 'slow');
    });

    $('.form-popup').fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

var fb_opts = {
    'overlayShow': true,
    'hideOnOverlayClick': true,
    'showCloseButton': true,
    'margin': 20,
    'centerOnScroll': true,
    'enableEscapeButton': true,
    'autoScale': true
};

var easy_fancybox_handler = function () {
    /* IMG */
    var fb_IMG_select = 'a[href*=".jpg"]:not(.nolightbox,li.nolightbox>a), area[href*=".jpg"]:not(.nolightbox), a[href*=".jpeg"]:not(.nolightbox,li.nolightbox>a), area[href*=".jpeg"]:not(.nolightbox), a[href*=".png"]:not(.nolightbox,li.nolightbox>a), area[href*=".png"]:not(.nolightbox)';
    jQuery(fb_IMG_select).addClass('fancybox image');
    var fb_IMG_sections = jQuery('div.gallery');
    fb_IMG_sections.each(function () {
        jQuery(this).find(fb_IMG_select).attr('rel', 'gallery-' + fb_IMG_sections.index(this));
    });
    jQuery('a.fancybox, area.fancybox, li.fancybox a').fancybox(jQuery.extend({}, fb_opts, {
        'transitionIn': 'elastic',
        'easingIn': 'easeOutBack',
        'transitionOut': 'elastic',
        'easingOut': 'easeInBack',
        'opacity': false,
        'hideOnContentClick': false,
        'titleShow': true,
        'titlePosition': 'over',
        'titleFromAlt': true,
        'showNavArrows': true,
        'enableKeyboardNav': true,
        'cyclic': false
    }));
    /* iFrame */
    jQuery('a.fancybox-iframe, area.fancybox-iframe, li.fancybox-iframe a').fancybox(jQuery.extend({}, fb_opts, {
        'type': 'iframe',
        'width': '70%',
        'height': '90%',
        'padding': 0,
        'titleShow': false,
        'titlePosition': 'float',
        'titleFromAlt': true,
        'allowfullscreen': false
    }));
};

var easy_fancybox_auto = function () {
    /* Auto-click */
    setTimeout(function () {
        jQuery('#fancybox-auto').trigger('click')
    }, 1000);
};

jQuery(document).on('ready post-load', function () {
    jQuery('.nofancybox,a.pin-it-button,a[href*="pinterest.com/pin/create/button"]').addClass('nolightbox');
});
jQuery(document).on('ready post-load', easy_fancybox_handler);
jQuery(document).on('ready', easy_fancybox_auto);
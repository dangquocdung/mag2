function initSlider() {
    var slider = jQuery('.slider');
    slider.each(function () {
        var el = jQuery(this);
        var single = jQuery(this).data('single');
        jQuery(this).find('.post').hover(function () {
            var parent = el.parent().find('.slider-control');
            if (!parent.hasClass('active')) {
                parent.addClass('active');
            }

        }, function () {
            var parent = el.parent().find('.slider-control');
            if (parent.hasClass('active')) {
                parent.removeClass('active');
            }
        });
        jQuery(this).owlCarousel({
            autoPlay: jQuery(this).data('autoplay'),
            slideSpeed: 3000,
            paginationSpeed: 400,
            singleItem: single
        });

        jQuery(this).siblings('.next').click(function () {
            el.trigger('owl.next');
        });
        jQuery(this).siblings('.prev').click(function () {
            el.trigger('owl.prev');
        });
    });

    jQuery('.slider-wrap').fadeIn();
}

$(document).ready(function () {
    initSlider();
});
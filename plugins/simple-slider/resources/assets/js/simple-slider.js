class SimpleSliderManagement {
    init() {
        let slider = $('.slider');
        slider.each((index, el) => {
            let single = $(el).data('single');
            $(el).find('.post').hover(() => {
                let parent = $(el).parent().find('.slider-control');
                if (!parent.hasClass('active')) {
                    parent.addClass('active');
                }

            }, () => {
                let parent = $(el).parent().find('.slider-control');
                if (parent.hasClass('active')) {
                    parent.removeClass('active');
                }
            });
            $(el).owlCarousel({
                autoPlay: $(el).data('autoplay'),
                slideSpeed: 3000,
                paginationSpeed: 400,
                singleItem: single
            });

            $(el).siblings('.next').click((event) => {
                $(event.currentTarget).trigger('owl.next');
            });
            $(el).siblings('.prev').click((event) => {
                $(event.currentTarget).trigger('owl.prev');
            });
        });

        $('.slider-wrap').fadeIn();
    }
}

$(document).ready(() => {
    new SimpleSliderManagement().init();
});
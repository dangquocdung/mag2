@if (count($sliders) > 0)
    <div class="slider-wrap">
        <span class="slider-control prev"><i class="fa fa-angle-left"></i></span>
        <span class="slider-control next"><i class="fa fa-angle-right"></i></span>
        <div class="slider home-slider" data-single="true" data-auto-play="true" data-navigation="false" data-dot="false">
            @foreach($sliders as $slider)
                <article class="post post-home-slider">
                    <div class="post-thumbnail">
                        <a href="{{ $slider->link }}" class="overlay"></a>
                        <img src="{{ get_object_image($slider->image) }}" alt="{{ $slider->title }}" width="100%">
                    </div>
                    <header class="entry-header">
                        <h2 class="entry-title">{{ $slider->title }}</h2>
                        <span class="apart-address">{{ $slider->description }}</span>
                    </header>
                </article>
            @endforeach
        </div>
    </div>
@endif
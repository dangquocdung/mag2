<a data-fancybox data-type="ajax" data-src="{{ route('simple-slider-item.edit', $item->id) }}" href="javascript:;" title="{{ $item->title }}">
    <img src="{{ url(get_object_image($item->image, 'thumb')) }}" alt="{{ $item->title }}" width="80">
</a>

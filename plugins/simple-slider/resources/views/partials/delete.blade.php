<div class="modal-box-container">
    <form action="{{ route('simple-slider-item.delete.post', $slider->id) }}" method="post" class="form-xs">
        {!! csrf_field() !!}
        {!! method_field('DELETE') !!}
        <div class="modal-title">
            <i class="til_img"></i> <strong>{{ __('Confirm delete slider #:id', ['id' => $slider->id]) }}</strong>
        </div>
        <div class="modal-body">
            <div class="form-body">
                <p>
                    {{ __('Do you really want to delete this slide ":title"?', ['title' => $slider->title]) }}
                </p>
            </div>
        </div>
        <div class="modal-footer">
            <a href="javascript:;" class="btn btn-primary" data-fancybox-close>{{ __('No')  }}</a>
            <button type="submit" class="btn btn-info btn-delete-slider">{{ __('Yes, let\'s delete it!') }}</button>
        </div>
    </form>
</div>
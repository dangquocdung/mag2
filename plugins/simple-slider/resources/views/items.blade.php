<div class="float-left">
    <a data-fancybox data-type="ajax" data-src="{{ route('simple-slider-item.create', ['simple_slider_id' => request()->route()->parameter('id')]) }}" href="javascript:;" class="btn btn-info"><i class="fa fa-plus-circle"></i> {{ __('Create new') }}</a>
    <button class="btn-success btn btn-save-sort-order" style="display: none;"><i class="fa fa-save"></i> {{ __('Save sorting') }}</button>
</div>
<br>

@include('core.base::elements.simple-table')
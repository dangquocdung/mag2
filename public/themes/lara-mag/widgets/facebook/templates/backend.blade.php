<div class="form-group">
    <label for="widget-name">{{ __('Name') }}</label>
    <input type="text" class="form-control" name="name" value="{{ $config['name'] }}">
</div>

<div class="form-group">
    <label for="widget-facebook-name">{{ __('Facebook FanPage Name') }}</label>
    <input type="text" class="form-control" name="facebook_name" value="{{ $config['facebook_name'] }}">
</div>

<div class="form-group">
    <label for="widget-facebook-id">{{ __('Facebook URL') }}</label>
    <input type="text" class="form-control" name="facebook_url" value="{{ $config['facebook_url'] }}">
</div>
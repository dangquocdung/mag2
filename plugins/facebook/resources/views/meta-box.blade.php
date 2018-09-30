<div class="form-group @if ($errors->has('facebook_auto_post')) has-error @endif">
    {!! Form::onOff('facebook_auto_post', 0) !!}
    <label for="facebook_auto_post">{{ __('Publish to fan page?') }}</label>
    {!! Form::error('facebook_auto_post', $errors) !!}
</div>
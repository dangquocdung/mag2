@extends('core.base::layouts.master')
@section('content')
    {!! Form::open() !!}
    <div class="max-width-1200">
        <div class="flexbox-annotated-section">

            <div class="flexbox-annotated-section-annotation">
                <div class="annotated-section-title pd-all-20">
                    <h2>{{ trans('plugins.facebook::facebook.settings.title') }}</h2>
                </div>
                <div class="annotated-section-description pd-all-20 p-none-t">
                    <p class="color-note">{{ trans('plugins.facebook::facebook.settings.description') }}</p>
                </div>
            </div>

            <div class="flexbox-annotated-section-content">
                <div class="wrapper-content pd-all-20">
                    <div class="form-group @if ($errors->has('settings.facebook_access_token')) has-error @endif">
                        <label class="text-title-field"
                               for="enable_cache">{{ trans('plugins.facebook::facebook.settings.enable') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_enable]" class="hrv-radio" value="1" @if (setting('facebook_enable')) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_enable]" class="hrv-radio" value="0" @if (!setting('facebook_enable')) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                        </label>
                    </div>

                    <div class="form-group">
                        <label class="text-title-field"
                               for="facebook_app_id">{{ trans('plugins.facebook::facebook.settings.app_id') }}</label>
                        <input data-counter="120" type="text" class="next-input" name="settings[facebook_app_id]" id="facebook_app_id"
                               value="{{ setting('facebook_app_id') }}">
                    </div>

                    @if (!app()->environment('demo') && env('FACEBOOK_USE_TOKEN', false))
                        <div class="form-group">
                            <label class="text-title-field"
                                   for="facebook_app_secret">{{ trans('plugins.facebook::facebook.settings.app_secret') }}</label>
                            <input data-counter="120" type="password" class="next-input" name="settings[facebook_app_secret]" id="facebook_app_secret"
                                   value="{{ setting('facebook_app_secret') }}">
                        </div>
                    @endif

                    @if (!app()->environment('demo') && env('FACEBOOK_USE_TOKEN', false))
                        <div class="form-group @if ($errors->has('settings.facebook_access_token')) has-error @endif">
                            <label for="facebook_access_token" class="text-title-field">{{ trans('plugins.facebook::facebook.settings.access_token') }}</label>
                            <div class="input-group">
                                {!! Form::text('settings[facebook_access_token]', old('settings.facebook_access_token', setting('facebook_access_token')), ['class' => 'form-control', 'id' => 'facebook_access_token', 'disabled' => true]) !!}
                                <span class="input-group-append" style="padding: 0; border: none; background: none;">
                                    @if (setting('facebook_access_token') != null)
                                        <a href="{{ route('facebook.remove-access-token') }}" class="btn btn-danger" style="line-height: 1.9; border-radius: 0 !important;">{{ trans('plugins.facebook::facebook.settings.remove_access_token') }}</a>
                                    @else
                                        <a href="{{ route('facebook.get-access-token') }}" class="btn btn-success" style="line-height: 1.9; border-radius: 0 !important;">{{ trans('plugins.facebook::facebook.settings.get_access_token') }}</a>
                                    @endif
                                </span>
                            </div>
                            @if (setting('facebook_token_expire_date') != null)
                                @php
                                    $expire_date = Carbon\Carbon::createFromTimestamp(setting('facebook_token_expire_date'));
                                @endphp
                                <div class="text-danger">
                                    <small>{{ trans('plugins.facebook::facebook.settings.expire_notice', ['date' => $expire_date->toDateTimeString()]) }}</small>
                                </div>
                            @endif
                            {!! Form::error('settings.facebook_access_token', $errors) !!}
                        </div>
                        @if (setting('facebook_access_token') != null && !empty($list_pages))
                            <div class="form-group @if ($errors->has('settings.facebook_page_id')) has-error @endif">
                                <label for="facebook_page_id" class="text-title-field">{{ trans('plugins.facebook::facebook.settings.select_page') }}</label>
                                <div class="ui-select-wrapper">
                                    {!! Form::select('settings[facebook_page_id]', $list_pages, old('settings.facebook_page_id.', setting('facebook_page_id')), ['class' => 'ui-select', 'id' => 'facebook_page_id']) !!}
                                    <svg class="svg-next-icon svg-next-icon-size-16">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select-chevron"></use>
                                    </svg>
                                </div>
                                {!! Form::error('settings.facebook_page_id', $errors) !!}
                            </div>
                            <div class="form-group @if ($errors->has('settings.facebook_auto_post_to_fan_page')) has-error @endif">
                                <label class="text-title-field"
                                       for="facebook_auto_post_to_fan_page">{{ trans('plugins.facebook::facebook.settings.auto_post_to_fan_page') }}
                                </label>
                                <label class="hrv-label">
                                    <input type="radio" name="settings[facebook_auto_post_to_fan_page]" class="hrv-radio" value="1" @if (setting('facebook_auto_post_to_fan_page', 0)) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                                </label>
                                <label class="hrv-label">
                                    <input type="radio" name="settings[facebook_auto_post_to_fan_page]" class="hrv-radio" value="0" @if (!setting('facebook_auto_post_to_fan_page', 0)) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                                </label>
                                {!! Form::error('settings.facebook_auto_post_to_fan_page', $errors) !!}
                            </div>
                        @else
                            <div class="form-group @if ($errors->has('settings.facebook_page_id')) has-error @endif">
                                <label for="facebook_page_id" class="text-title-field">{{ __('Fan page ID') }}</label>
                                {!! Form::text('settings[facebook_page_id]', old('settings[facebook_page_id]', setting('facebook_page_id')), ['class' => 'next-input', 'id' => 'facebook_page_id']) !!}
                                <div class="text-success">
                                    <small>{!! __('plugins.facebook::facebook.settings.get_fan_page_id_helper', ['link' => anchor_link('https://findmyfbid.com', 'https://findmyfbid.com', ['target' => '_blank'])]) !!} </small>
                                </div>
                                {!! Form::error('settings.facebook_page_id', $errors) !!}
                            </div>
                        @endif
                    @endif

                    <div class="form-group @if ($errors->has('settings.facebook_add_script')) has-error @endif">
                        <label class="text-title-field"
                               for="facebook_add_script">{{ trans('plugins.facebook::facebook.settings.add_fb_script') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_add_script]" class="hrv-radio" value="1" @if (setting('facebook_add_script')) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_add_script]" class="hrv-radio" value="0" @if (!setting('facebook_add_script')) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                        </label>
                        {!! Form::error('settings.facebook_add_script', $errors) !!}
                    </div>
                    <div class="form-group @if ($errors->has('settings.facebook_use_comments')) has-error @endif">
                        <label class="text-title-field"
                               for="facebook_use_comments">{{ trans('plugins.facebook::facebook.settings.use_fb_comment') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_use_comments]" class="hrv-radio" value="1" @if (setting('facebook_use_comments')) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_use_comments]" class="hrv-radio" value="0" @if (!setting('facebook_use_comments')) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                        </label>
                        {!! Form::error('settings.facebook_use_comments', $errors) !!}
                    </div>
                    <div class="form-group @if ($errors->has('settings.facebook_show_chat_box')) has-error @endif">
                        <label class="text-title-field"
                               for="facebook_show_chat_box">{{ trans('plugins.facebook::facebook.settings.show_chat_box') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_show_chat_box]" class="hrv-radio" value="1" @if (setting('facebook_show_chat_box')) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_show_chat_box]" class="hrv-radio" value="0" @if (!setting('facebook_show_chat_box')) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                        </label>
                        {!! Form::error('settings.facebook_show_chat_box', $errors) !!}
                        @if (setting('facebook_show_chat_box', 1) == 1)
                            {!! Form::helper(trans('plugins.facebook::facebook.settings.chat_box_helper', ['fan-page-id' => '<code>https://www.facebook.com/' . setting('facebook_page_id') . '/settings/?tab=messenger_platform</code>', 'domain' => '<code>' . url('/') . '</code>'])) !!}
                        @endif
                    </div>
                    <div class="form-group @if ($errors->has('settings.facebook_chat_minimized')) has-error @endif">
                        <label class="text-title-field"
                               for="facebook_chat_minimized">{{ trans('plugins.facebook::facebook.settings.minimized_chat_box') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_chat_minimized]" class="hrv-radio" value="1" @if (setting('facebook_chat_minimized')) checked @endif>{{ trans('plugins.facebook::facebook.settings.yes') }}
                        </label>
                        <label class="hrv-label">
                            <input type="radio" name="settings[facebook_chat_minimized]" class="hrv-radio" value="0" @if (!setting('facebook_chat_minimized')) checked @endif>{{ trans('plugins.facebook::facebook.settings.no') }}
                        </label>
                        {!! Form::error('settings.facebook_chat_minimized', $errors) !!}
                    </div>

                </div>
            </div>

        </div>
        <div class="flexbox-annotated-section" style="border: none">
            <div class="flexbox-annotated-section-annotation">
                &nbsp;
            </div>
            <div class="flexbox-annotated-section-content">
                <button class="btn btn-info" type="submit">{{ trans('core.setting::setting.save_settings') }}</button>
            </div>
        </div>
    </div>
    {!! Form::close() !!}
@endsection
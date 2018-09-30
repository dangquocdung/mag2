<?php

Route::group(['namespace' => 'Botble\SimpleSlider\Http\Controllers', 'middleware' => 'web'], function () {

    Route::group(['prefix' => config('core.base.general.admin_dir'), 'middleware' => 'auth'], function () {
        Route::group(['prefix' => 'simple-sliders'], function () {

            Route::get('/', [
                'as' => 'simple-slider.list',
                'uses' => 'SimpleSliderController@getList',
            ]);

            Route::get('/create', [
                'as' => 'simple-slider.create',
                'uses' => 'SimpleSliderController@getCreate',
            ]);

            Route::post('/create', [
                'as' => 'simple-slider.create',
                'uses' => 'SimpleSliderController@postCreate',
            ]);

            Route::get('/edit/{id}', [
                'as' => 'simple-slider.edit',
                'uses' => 'SimpleSliderController@getEdit',
            ]);

            Route::post('/edit/{id}', [
                'as' => 'simple-slider.edit',
                'uses' => 'SimpleSliderController@postEdit',
            ]);

            Route::get('/delete/{id}', [
                'as' => 'simple-slider.delete',
                'uses' => 'SimpleSliderController@getDelete',
            ]);

            Route::post('/delete-many', [
                'as' => 'simple-slider.delete.many',
                'uses' => 'SimpleSliderController@postDeleteMany',
                'permission' => 'simple-slider.delete',
            ]);

            Route::post('/sorting', [
                'as' => 'simple-slider.sorting',
                'uses' => 'SimpleSliderController@postSorting',
                'permission' => 'simple-slider.edit',
            ]);
        });

        Route::group(['prefix' => 'simple-slider-items'], function () {

            Route::get('/list/{id}', [
                'as' => 'simple-slider-item.list',
                'uses' => 'SimpleSliderItemController@getList',
            ]);

            Route::get('/create', [
                'as' => 'simple-slider-item.create',
                'uses' => 'SimpleSliderItemController@getCreate',
            ]);

            Route::post('/create', [
                'as' => 'simple-slider-item.create',
                'uses' => 'SimpleSliderItemController@postCreate',
            ]);

            Route::get('/edit/{id}', [
                'as' => 'simple-slider-item.edit',
                'uses' => 'SimpleSliderItemController@getEdit',
            ]);

            Route::post('/edit/{id}', [
                'as' => 'simple-slider-item.edit',
                'uses' => 'SimpleSliderItemController@postEdit',
            ]);

            Route::get('/delete/{id}', [
                'as' => 'simple-slider-item.delete',
                'uses' => 'SimpleSliderItemController@getDelete',
            ]);

            Route::delete('/delete/{id}', [
                'as' => 'simple-slider-item.delete.post',
                'uses' => 'SimpleSliderItemController@postDelete',
            ]);
        });
    });

});
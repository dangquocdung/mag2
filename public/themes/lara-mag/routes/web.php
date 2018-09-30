<?php

Route::group(['namespace' => 'Theme\LaraMag\Http\Controllers', 'middleware' => 'web'], function () {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
        Route::get('/lara-mag/test', 'LaraMagController@getTest');
    });
});

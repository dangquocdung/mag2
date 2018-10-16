<?php

namespace Botble\Facebook\Providers;

use Botble\Base\Events\CreatedContentEvent;
use Botble\Facebook\Listeners\CreatedContentListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     * @author Dung Thinh
     */
    protected $listen = [
        CreatedContentEvent::class => [
            CreatedContentListener::class,
        ],
    ];
}

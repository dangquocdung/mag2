<?php

namespace Botble\Note\Listeners;

use Botble\Base\Events\CreatedContentEvent;
use Exception;
use Note;

class CreatedContentListener
{

    /**
     * Handle the event.
     *
     * @param CreatedContentEvent $event
     * @return void
     * @author Dung Thinh
     */
    public function handle(CreatedContentEvent $event)
    {
        try {
            Note::saveNote($event->screen, $event->request, $event->data);
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}

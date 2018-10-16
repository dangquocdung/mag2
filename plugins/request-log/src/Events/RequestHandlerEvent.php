<?php

namespace Botble\RequestLog\Events;

use Event;
use Illuminate\Queue\SerializesModels;

class RequestHandlerEvent extends Event
{
    use SerializesModels;

    /**
     * @var mixed
     */
    public $code;

    /**
     * RequestHandlerEvent constructor.
     * @param int $code
     * @author Dung Thinh
     */
    public function __construct($code)
    {
        $this->code = $code;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     * @author Dung Thinh
     */
    public function broadcastOn()
    {
        return [];
    }
}

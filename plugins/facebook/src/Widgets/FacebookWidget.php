<?php

namespace Botble\Facebook\Widgets;

use Botble\Widget\AbstractWidget;

class FacebookWidget extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * @var string
     */
    protected $frontendTemplate = 'plugins.facebook::widgets.frontend';

    /**
     * @var string
     */
    protected $backendTemplate = 'plugins.facebook::widgets.backend';

    /**
     * @var bool
     */
    protected $is_core = true;

    /**
     * FacebookWidget constructor.
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function __construct()
    {
        parent::__construct([
            'name' => __('Facebook Widget (Facebook Plugin)'),
            'description' => __('Facebook fan page widget'),
            'facebook_name' => null,
            'facebook_id' => null,
        ]);
    }
}

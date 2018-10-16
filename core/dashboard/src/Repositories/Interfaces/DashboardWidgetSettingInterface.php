<?php

namespace Botble\Dashboard\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface DashboardWidgetSettingInterface extends RepositoryInterface
{
    /**
     * @return mixed
     * @author Dung Thinh
     * @since 2.1
     */
    public function getListWidget();
}

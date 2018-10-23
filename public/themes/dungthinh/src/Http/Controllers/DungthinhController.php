<?php

namespace Theme\Dungthinh\Http\Controllers;

use Illuminate\Routing\Controller;
use Theme;

class DungthinhController extends Controller
{

    /**
     * @return \Response
     */
    public function test()
    {
        return Theme::scope('test')->render();
    }
}
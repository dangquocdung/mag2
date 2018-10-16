<?php

namespace Theme\LaraMag\Http\Controllers;

use Illuminate\Routing\Controller;

class LaraMagController extends Controller
{
    /**
     * @return string
     * @author Dung Thinh
     */
    public function getTest()
    {
        // return Theme::scope('test')->render(); You can create a view (public/themes/ripple/views/test.blade.php) to show data.
        return 'This is a test route';
    }
}

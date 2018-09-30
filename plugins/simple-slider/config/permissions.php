<?php

return [
    [
        'name' => 'Simple Sliders',
        'flag' => 'simple-slider.list',
    ],
    [
        'name' => 'Create',
        'flag' => 'simple-slider.create',
        'parent_flag' => 'simple-slider.list',
    ],
    [
        'name' => 'Edit',
        'flag' => 'simple-slider.edit',
        'parent_flag' => 'simple-slider.list',
    ],
    [
        'name' => 'Delete',
        'flag' => 'simple-slider.delete',
        'parent_flag' => 'simple-slider.list',
    ],

    [
        'name' => 'Slider Items',
        'flag' => 'simple-slider-item.list',
        'parent_flag' => 'simple-slider.list',
    ],
    [
        'name' => 'Create',
        'flag' => 'simple-slider-item.create',
        'parent_flag' => 'simple-slider-item.list',
    ],
    [
        'name' => 'Edit',
        'flag' => 'simple-slider-item.edit',
        'parent_flag' => 'simple-slider-item.list',
    ],
    [
        'name' => 'Delete',
        'flag' => 'simple-slider-item.delete',
        'parent_flag' => 'simple-slider-item.list',
    ],
];
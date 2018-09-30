let mix = require('laravel-mix');

const publicPath = 'public/themes/lara-mag/assets';
const resourcePath = './public/themes/lara-mag/assets';

mix
    .sass(resourcePath + '/sass/lara-mag.scss', publicPath + '/css')
    .scripts(
        [
            resourcePath + '/js/jquery.min.js',
            resourcePath + '/js/custom.js',
            resourcePath + '/js/jquery.fancybox.min.js'
        ], publicPath + '/js/lara-mag.js');
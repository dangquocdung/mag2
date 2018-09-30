let mix = require('laravel-mix');

const publicPath = 'public/vendor/core/plugins/simple-slider';
const resourcePath = './plugins/simple-slider';

mix
    .js(resourcePath + '/resources/assets/js/simple-slider.js', publicPath + '/js')
    .copy(publicPath + '/js/simple-slider.js', resourcePath + '/public/js')

    .js(resourcePath + '/resources/assets/js/simple-slider-admin.js', publicPath + '/js')
    .copy(publicPath + '/js/simple-slider-admin.js', resourcePath + '/public/js')

    .sass(resourcePath + '/resources/assets/sass/simple-slider.scss', publicPath + '/css')
    .copy(publicPath + '/css/simple-slider.css', resourcePath + '/public/css')

    .sass(resourcePath + '/resources/assets/sass/simple-slider-admin.scss', publicPath + '/css')
    .copy(publicPath + '/css/simple-slider-admin.css', resourcePath + '/public/css');
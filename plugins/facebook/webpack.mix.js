let mix = require('laravel-mix');

const publicPath = 'public/vendor/core/plugins/facebook';
const resourcePath = './plugins/facebook';

mix
    .sass(resourcePath + '/resources/assets/sass/facebook.scss', publicPath + '/css')
    .copy(publicPath + '/css/facebook.css', resourcePath + '/public/css');
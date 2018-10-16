<?php

if (!function_exists('shortcode')) {
    /**
     * @return \Illuminate\Foundation\Application|mixed
     * @author Dung Thinh
     */
    function shortcode()
    {
        return app('shortcode');
    }
}

if (!function_exists('add_shortcode')) {
    /**
     * @param $key
     * @param $name
     * @param null $description
     * @param $callback
     * @return \Illuminate\Support\ServiceProvider
     * @author Dung Thinh
     */
    function add_shortcode($key, $name, $description = null, $callback)
    {
        return shortcode()->register($key, $name, $description, $callback);
    }
}


if (!function_exists('do_shortcode')) {
    /**
     * @param $content
     * @return string
     */
    function do_shortcode($content)
    {
        return shortcode()->compile($content);
    }
}
if (!function_exists('generate_shortcode')) {
    /**
     * @param $name
     * @param array $attributes
     * @return string
     */
    function generate_shortcode($name, array $attributes)
    {
        $parsedAttributes = '';
        foreach ($attributes as $key => $attribute) {
            $parsedAttributes .= ' ' . $key . '="' . str_slug($attribute) . '"';
        }
        return '[' . $name . $parsedAttributes . ']';
    }
}

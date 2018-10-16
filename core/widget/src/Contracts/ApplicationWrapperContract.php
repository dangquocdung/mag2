<?php

namespace Botble\Widget\Contracts;

use Closure;

interface ApplicationWrapperContract
{
    /**
     * Wrapper around Cache::remember().
     *
     * @param $key
     * @param $minutes
     * @param Closure $callback
     * @return mixed
     * @author Dung Thinh
     */
    public function cache($key, $minutes, Closure $callback);

    /**
     * Wrapper around app()->call().
     *
     * @param $method
     * @param array $params
     * @return mixed
     * @author Dung Thinh
     */
    public function call($method, $params = []);

    /**
     * Get the specified configuration value.
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     * @author Dung Thinh
     */
    public function config($key, $default = null);

    /**
     * Wrapper around app()->getNamespace().
     *
     * @return string
     * @author Dung Thinh
     */
    public function getNamespace();

    /**
     * Wrapper around app()->make().
     *
     * @param string $abstract
     * @param array $parameters
     * @return mixed
     * @author Dung Thinh
     */
    public function make($abstract, array $parameters = []);
}

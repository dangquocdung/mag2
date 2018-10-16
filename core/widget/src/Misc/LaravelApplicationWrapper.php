<?php

namespace Botble\Widget\Misc;

use Botble\Widget\Contracts\ApplicationWrapperContract;
use Closure;
use Illuminate\Container\Container;

class LaravelApplicationWrapper implements ApplicationWrapperContract
{

    /**
     * @var \App
     */
    protected $app;

    /**
     * Constructor.
     * @author Dung Thinh
     */
    public function __construct()
    {
        $this->app = Container::getInstance();
    }

    /**
     * Wrapper around Cache::remember().
     *
     * @param $key
     * @param $minutes
     * @param Closure $callback
     * @return mixed
     * @author Dung Thinh
     */
    public function cache($key, $minutes, Closure $callback)
    {
        return $this->app->make('cache')->remember($key, $minutes, $callback);
    }

    /**
     * Wrapper around app()->call().
     *
     * @param $method
     * @param array $params
     * @return mixed
     * @author Dung Thinh
     */
    public function call($method, $params = [])
    {
        return $this->app->call($method, $params);
    }

    /**
     * Get the specified configuration value.
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     * @author Dung Thinh
     */
    public function config($key, $default = null)
    {
        return $this->app->make('config')->get($key, $default);
    }

    /**
     *
     * @return string
     * @author Dung Thinh
     */
    public function getNamespace()
    {
        return $this->app->getNamespace();
    }

    /**
     * Wrapper around app()->make().
     *
     * @param string $abstract
     * @param array $parameters
     * @return mixed
     * @author Dung Thinh
     */
    public function make($abstract, array $parameters = [])
    {
        return $this->app->make($abstract, $parameters);
    }
}

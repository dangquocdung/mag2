<?php

if (!function_exists('add_filter')) {
    /**
     * @param $hook
     * @param $callback
     * @param int $priority
     * @param int $arguments
     * @author Dung Thinh
     */
    function add_filter($hook, $callback, $priority = 20, $arguments = 1)
    {
        Filter::addListener($hook, $callback, $priority, $arguments);
    }
}

if (!function_exists('remove_filter')) {
    /**
     * @param $hook
     * @author Dung Thinh
     */
    function remove_filter($hook)
    {
        Filter::removeListener($hook);
    }
}

if (!function_exists('add_action')) {
    /**
     * @param $hook
     * @param $callback
     * @param int $priority
     * @param int $arguments
     * @author Dung Thinh
     */
    function add_action($hook, $callback, $priority = 20, $arguments = 1)
    {
        Action::addListener($hook, $callback, $priority, $arguments);
    }
}

if (!function_exists('apply_filters')) {
    /**
     * @return mixed
     * @author Dung Thinh
     */
    function apply_filters()
    {
        $args = func_get_args();
        return Filter::fire(array_shift($args), $args);
    }
}

if (!function_exists('do_action')) {
    /**
     * @author Dung Thinh
     */
    function do_action()
    {
        $args = func_get_args();
        Action::fire(array_shift($args), $args);
    }
}

if (!function_exists('get_hooks')) {
    /**
     * @param null $name
     * @param bool $isFilter
     * @return array
     * @author Dung Thinh
     */
    function get_hooks($name = null, $isFilter = true)
    {
        if ($isFilter == true) {
            $listeners = Filter::getListeners();
        } else {
            $listeners = Action::getListeners();
        }

        if (empty($name)) {
            return $listeners;
        }
        return array_get($listeners, $name, []);
    }
}

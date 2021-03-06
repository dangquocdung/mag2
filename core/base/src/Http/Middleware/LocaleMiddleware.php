<?php

namespace Botble\Base\Http\Middleware;

use Assets;
use Auth;
use Closure;

class LocaleMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     * @author Dung Thinh
     * @throws \Exception
     */
    public function handle($request, Closure $next)
    {
        app()->setLocale(env('APP_LOCALE', config('app.locale')));
        if ($request->is(config('core.base.general.admin_dir') . '/*') || $request->is(config('core.base.general.admin_dir'))) {
            if ($request->session()->has('admin-locale') && array_key_exists($request->session()->get('admin-locale'), Assets::getAdminLocales())) {
                if (app()->getLocale() !== $request->session()->get('admin-locale') && Auth::check()) {
                    cache()->forget(md5('cache-dashboard-menu-' . Auth::user()->getKey()));
                }
                app()->setLocale($request->session()->get('admin-locale'));
                $request->setLocale($request->session()->get('admin-locale'));
            }
        }

        return $next($request);
    }
}

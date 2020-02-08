<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
    $response= $next($request);
    $response ->header('Access-Control-Allow-Origin' , 'Frontend')
    ->header('Access-Control-Allow-Methods' , 'GET, POST, PUT, DELETE, OPTIONS' )
    ->header('Access-Control-Allow-Headers' , 'Authorization, Content-Type' );
    return $response;
    }
}

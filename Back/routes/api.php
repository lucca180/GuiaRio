<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/*Rotas do usuário*/
Route::get('showUser/{id}', 'UserController@showUser');
Route::post('createUser', 'UserController@createUser');
Route::put('updateUser/{id}', 'UserController@updateUser');
Route::delete('deleteUser/{id}', 'UserController@deleteUser');

/*Rotas dos lugares*/
Route::get('showPlace/{id}', 'PlaceController@showPlace');
Route::post('createPlace', 'PlaceController@createPlace');
Route::put('updatePlace/{id}', 'PlaceController@updatePlace');
Route::delete('deletePlace/{id}', 'PlaceController@deletePlace');

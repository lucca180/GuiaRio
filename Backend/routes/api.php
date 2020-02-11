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
Route::get('listUser', 'UserController@listUser');
Route::get('showUser/{id}', 'UserController@showUser');
Route::get('showUserPhoto/{id}', 'UserController@showUserPhoto');
Route::get('ratingsUser/{id}', 'UserController@ratingsUser');
Route::get('favorites/{id}', 'UserController@favorites');
Route::post('createUser', 'UserController@createUser');
Route::post('createRating/{id}', 'UserController@createRating');
Route::post('createFavorite/{id}', 'UserController@createFavorite');
Route::post('deleteFavorite/{id}', 'UserController@deleteFavorite');
Route::put('updateUser/{id}', 'UserController@updateUser');
Route::delete('deleteUser/{id}', 'UserController@deleteUser');

/*Rotas dos lugares*/
Route::get('listPlace', 'PlaceController@listPlace');
Route::get('showPlace/{id}', 'PlaceController@showPlace');
Route::get('showPlacePhoto/{id}', 'PlaceController@showPlacePhoto');
Route::get('ratingsPlace/{id}', 'PlaceController@ratingsPlace');
Route::post('createPlace', 'PlaceController@createPlace');
Route::put('updatePlace/{id}', 'PlaceController@updatePlace');
Route::delete('deletePlace/{id}', 'PlaceController@deletePlace');

/*Rotas do passport*/
Route::post('register','API\PassportController@register');
Route::post('login','API\PassportController@login');

Route::group(['middleware'=>'auth:api'], function() {
    Route::post('logout', 'API\PassportController@logout');
    Route::post('getDetails', 'API\PassportController@getDetails');
});

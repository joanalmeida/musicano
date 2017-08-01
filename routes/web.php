<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::get('/songs', function () {
	return view('songs');
});

Route::get('generos', function() {
	return ["Rock", "Indie", "Electronica", "Alternativo"];
});

Route::post('filtrar', function() {
	return "{'generos': ['Hip-Hop', 'Metal']}";
});
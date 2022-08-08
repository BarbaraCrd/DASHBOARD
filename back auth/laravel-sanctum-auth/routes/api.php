<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WidgetController;
use App\Http\Controllers\API\AuthController;

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

Route::get('users',[AuthController::class,'indexUser']);
Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);

Route::delete('destroyUser/{id}',[AuthController::class,'destroyUser']);
Route::put('users/updatei/{id}', [AuthController::class, 'updatei']);
Route::put('users/updateadmin/{id}', [AuthController::class, 'updateadmin']);
Route::put('users/updatep/{id}', [AuthController::class, 'updatep']);

Route::post('widget', [WidgetController::class, 'store']);
Route::get('widgets', [WidgetController::class, 'index']);
Route::get('type', [WidgetController::class, 'indexType']);
Route::delete('widget/{id}', [WidgetController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


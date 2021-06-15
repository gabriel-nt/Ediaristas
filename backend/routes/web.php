<?php

use App\Http\Controllers\DiaristController;
use Illuminate\Support\Facades\Route;

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

Route::get("/", [DiaristController::class, "index"])->name("diarist.index");
Route::get("/diarists/create", [DiaristController::class, "create"])->name(
    "diarist.create"
);
Route::post("/diarists", [DiaristController::class, "store"])->name(
    "diarist.store"
);
Route::get("/diarists/{id}/edit", [DiaristController::class, "edit"])->name(
    "diarist.edit"
);
Route::put("/diarists/{id}", [DiaristController::class, "update"])->name(
    "diarist.update"
);
Route::get("/diarists/{id}", [DiaristController::class, "destroy"])->name(
    "diarist.destroy"
);

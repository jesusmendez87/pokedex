<?php


use Illuminate\Support\Facades\Route;



Route::apiResource('entrenadores', App\Http\Controllers\EntrenadorController::class);
Route::apiResource('pokemons', App\Http\Controllers\PokemonController::class);
Route::apiResource('combates', App\Http\Controllers\CombateController::class);

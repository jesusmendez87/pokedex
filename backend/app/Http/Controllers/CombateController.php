<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Combate;

class CombateController extends Controller
{
    function index()
    {
        return Combate::all();
    }

    function show($id)
    {
        return Combate::findOrFail($id);
    }
    function store(Request $request)
    {
        $validated = $request->validate([
            'pokemon1_id' => 'required|exists:pokemons,id',
            'pokemon2_id' => 'required|exists:pokemons,id',
            'ganador_id' => 'required|exists:pokemons,id',
            'fecha' => 'required|date',
        ]);

        return Combate::create($validated);
    }

    function destroy($id)
    {
        return Combate::destroy($id);
    }


    function update(Request $request, $id)
    {
        $combate = Combate::findOrFail($id);

        $validated = $request->validate([
            'pokemon1_id' => 'sometimes|exists:pokemons,id',
            'pokemon2_id' => 'sometimes|exists:pokemons,id',
            'ganador_id' => 'sometimes|exists:pokemons,id',
            'fecha' => 'sometimes|date',
        ]);

        $combate->update($validated);

        return $combate;
    }


    function getCombatesByPokemon($pokemonId)
    {
        return Combate::where('pokemon1_id', $pokemonId)
            ->orWhere('pokemon2_id', $pokemonId)
            ->get();
    }



}

<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Pokemon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class PokemonController extends Controller
{
    public function index(){
     return DB::connection('mongodb')
        ->table('pokemons')
        ->get();
}

    public function show($id)
    {
        return DB::connection('mongodb')
            ->table('pokemons')
            ->find($id);
    }

    public function destroy($id)
    {
        // Lógica para eliminar un Pokémon
        return DB::connection('mongodb')
            ->table('pokemons')
            ->delete($id);
    }

    public function store(Request $request)
    {
        // Lógica para almacenar un nuevo Pokémon

      $validated = $request->validate([
          'nombre' => 'required|string|max:255',
          'tipo' => 'required|string|max:255',
          'urlImagen' => 'string',

      ]);
        return DB::connection('mongodb')
            ->table('pokemons')
            ->insert($validated);
    }


    }


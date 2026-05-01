<?php

namespace Database\Seeders;
use App\Models\Pokemon;

use Illuminate\Database\Seeder;

class PokemonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        Pokemon::create([
            'nombre' => 'Pikachu',
            'tipo' => 'Eléctrico',
            'nivel' => 25,
            'entrenador_id' => 1,
        ]);

        Pokemon::create([
            'nombre' => 'Charmander',
            'tipo' => 'Fuego',
            'nivel' => 15,
            'entrenador_id' => 2,
        ]);

        Pokemon::create([
            'nombre' => 'Squirtle',
            'tipo' => 'Agua',
            'nivel' => 18,
            'entrenador_id' => 3,
        ]);
    }
}

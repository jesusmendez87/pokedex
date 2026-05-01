<?php

namespace Database\Seeders;
use App\Models\Entrenador;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class EntrenadorSeeder extends Seeder
{
    /**
     * Run the database seeds.php
     */
    public function run(): void
{
        // Create a new trainer
        Entrenador::create([
            'nombre' => 'Ash',
            'edad' => 10,
            'ciudad' => 'Equipo Rocket',
        ]);

        Entrenador::create([
            'nombre' => 'Misty',
            'edad' => 12,
            'ciudad' => 'Equipo Agua',
        ]);

        Entrenador::create([
            'nombre' => 'Brock',
            'edad' => 15,
            'ciudad' => 'Equipo Roca',
        ]);

    }

}

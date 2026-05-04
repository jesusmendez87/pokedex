<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

class CrudTest extends BaseTestCase
{
    public function testDebeCrearUnPokemon()
    {
        DB::shouldReceive('connection')
            ->once()
            ->with('mongodb')
            ->andReturnSelf();

        DB::shouldReceive('table')
            ->once()
            ->with('pokemons')
            ->andReturnSelf();

            DB::shouldReceive('insert')
        ->once()
        ->with([
            'nombre' => 'Pikachu',
            'tipo' => 'electrico',
            'urlImagen' => 'url'
        ])
        ->andReturn(true);

        $response = $this->postJson('/api/pokemons', [
            'nombre' => 'Pikachu',
            'tipo' => 'electrico',
            'urlImagen' => 'url'
        ]);

        $response->assertStatus(201);
    }

    public function testDebeEliminarUnPokemon()
    {
        DB::shouldReceive('connection')
            ->once()
            ->with('mongodb')
            ->andReturnSelf();

        DB::shouldReceive('table')
            ->once()
            ->with('pokemons')
            ->andReturnSelf();


        DB::shouldReceive('delete')
            ->once()
            ->andReturn(1);

        $response = $this->deleteJson('/api/pokemons/1');

        $response->assertStatus(200);

    }

    public function testDebeActualizarUnPokemon()
    {
        DB::shouldReceive('connection')
            ->once()
            ->with('mongodb')
            ->andReturnSelf();

        DB::shouldReceive('table')
            ->once()
            ->with('pokemons')
            ->andReturnSelf();

       DB::shouldReceive('where')
        ->andReturnSelf();

        DB::shouldReceive('update')
            ->once()
            ->andReturn(1);

        $response = $this->putJson('/api/pokemons/1', [
            'nombre' => 'Pikachu',
            'tipo' => 'electrico',
            'urlImagen' => 'url'
        ]);

        $response->assertStatus(200);
    }
}

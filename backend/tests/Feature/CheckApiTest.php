<?php
use Tests\TestCase;

it('Devuelve lista de pokemons con estructura correcta', function () {

    $response = $this->getJson('/api/pokemons');

    $response->assertStatus(200);

    $response->assertJsonStructure([
        '*' => [ // array de pokemons
            'nombre',
            'tipo',
            'urlImagen'
        ]
    ]);
});

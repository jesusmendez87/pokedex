<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entrenador extends Model
{
    protected $fillable = [
        'nombre',
        'edad',
        'ciudad',
    ];

    public function pokemons()
    {
        return $this->hasMany(Pokemon::class);
    }
}

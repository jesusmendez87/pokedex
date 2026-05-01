<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Combate extends Model
{
    protected $fillable = [
        'pokemon1_id',
        'pokemon2_id',
        'ganador_id',
        'fecha',
    ];

    public function pokemon1()
    {
        return $this->belongsTo(Pokemon::class, 'pokemon1_id');
    }

    public function pokemon2()
    {
        return $this->belongsTo(Pokemon::class, 'pokemon2_id');
    }

    public function ganador()
    {
        return $this->belongsTo(Pokemon::class, 'ganador_id');
    }


}

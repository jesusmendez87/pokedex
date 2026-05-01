<?php   

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Pokemon extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'pokemons';

    protected $primaryKey = '_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $casts = [
        '_id' => 'string',
    ];

    protected $guarded = [];

    public function getKeyName()
    {
        return '_id';
    }

    protected $fillable = [
        'nombre',
        'tipo',
        'urlImagen',
    ];
}


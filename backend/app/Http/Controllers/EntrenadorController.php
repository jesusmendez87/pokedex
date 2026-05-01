<?php

namespace App\Http\Controllers;
 use App\Models\Entrenador;
 use Illuminate\Http\Request;

class EntrenadorController extends Controller
{
    public function index()
    {
       return Entrenador::all();
    }

    public function show($id)
    {
        return Entrenador::findOrFail($id);
    }

    public function  destroy($id)
    {
        // Lógica para eliminar un entrenador
       return Entrenador::destroy($id);

    }

    public function store(Request $request)
    {
        // Lógica para almacenar un nuevo entrenador

      $validated = $request->validate([
          'nombre' => 'required|string|max:255',
          'edad' => 'required|integer|min:0',
          'ciudad' => 'required|string|max:255',
      ]);


        return Entrenador::create($validated);


    }

    function update($id){
$validated = request()->validate([
          'nombre' => 'sometimes|string|max:255',
            'edad' => 'sometimes|integer|min:0',
            'ciudad' => 'sometimes|string|max:255',
        ]);
        $entrenador = Entrenador::findOrFail($id);
        $entrenador->update($validated);
    }

}

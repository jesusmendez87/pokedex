import mongoose from  'mongoose';
import express from 'express';
import Pokemon from './src/app/models/pokemon.js';
import dotenv from 'dotenv';
import { json } from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('¡¡¡Conectado a MongoDB!!!'))
  .catch((err) => console.log('Error al conectarse a MongoDB :(', err));

app.use(express.json());

// Esto habilita CORS para Angular
app.use(cors());

// get pockemons

app.get('/api/pokemons', async(req, res) =>{
try{const pokemon = await Pokemon.find();
    res.json(pokemon);
  } catch (error) {
    console.error('Error al obtener los pokemon:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.post('/api/pokemon', async (req, res)=> {
const{ nombre, tipo, urlImagen} = req.body;
try{

  const newPokemon = new Pokemon({nombre, tipo, urlImagen});
  await newPokemon.save();
  res.status(201).json(newPokemon);
}
catch (error) {
    console.error('Error al crear el pokemon:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }

});


app.delete('/api/pokemon/:nombre', async (req, res) => {
  const { nombre } = req.params;
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ nombre });
    if (!deletedPokemon) {
      return  res.status(404).json({ message: 'Pokémon no encontrado' });
    }
    res.json({ message: 'Pokémon eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el Pokémon:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

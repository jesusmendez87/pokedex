import { PokemonResponse } from './../../../models/pokemon';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../../core/pokemon-service';

@Component({
  selector: 'app-nuevo-pokemon-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-pokemon-component.html',
  styleUrl: './nuevo-pokemon-component.css',
})
export class NuevoPokemonComponent {

  nuevoPokemon: PokemonResponse = {
    nombre: '',
    tipo: '',
    urlImagen: ''
  };

  @Output() pokemonGuardado = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();

  constructor(private pokemonService: PokemonService) {}

  cargarPokemon() {

    if (!this.nuevoPokemon.nombre || !this.nuevoPokemon.tipo) {
      alert('Debes completar el nombre y tipo del Pokémon');
      return;
    }

    this.pokemonService.addPokemon(this.nuevoPokemon).subscribe({
      next: res => {
        console.log('Pokemon agregado', res);

        this.nuevoPokemon = {
          nombre: '',
          tipo: '',
          urlImagen: ''
        };

        alert('Pokémon agregado con éxito');

        this.pokemonGuardado.emit();
        this.cerrar.emit();
      },
      error: err => {
        console.error('Error al agregar Pokémon', err);
      }
    });
  }
}

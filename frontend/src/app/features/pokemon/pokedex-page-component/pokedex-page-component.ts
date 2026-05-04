import { Component } from '@angular/core';
import { PokemonResponse } from '../../../models/pokemon';
import { PokemonService } from '../../../core/pokemon-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NuevoPokemonComponent } from "../nuevo-pokemon-component/nuevo-pokemon-component";
import { PokemonItemComponent } from "../pokemon-item-component/pokemon-item-component";
import { response } from 'express';


@Component({
  selector: 'app-pokedex-page-component',
  standalone: true,
  imports: [CommonModule, FormsModule, NuevoPokemonComponent, PokemonItemComponent],
  templateUrl: './pokedex-page-component.html',
  styleUrls: ['./pokedex-page-component.css'],
})
export class PokedexPageComponent {

  pokemons: PokemonResponse[] = [];
  delete: string = '';
  modalAbierto = false;

  constructor(private pokemonService: PokemonService) {
    this.loadpokemons();
  }

  deletePokemon(id: string) {
    this.pokemonService.deletePokemon(id).subscribe({
      next: res => {
        console.log('Pokemon eliminado', res);
        this.loadpokemons();
      },
      error: err => {
        console.error('Error al eliminar el Pokemon', err);
        alert('Error al eliminar el Pokémon');
      }
    });
  }


  loadpokemons() {
    this.pokemonService.getPokemonList().subscribe((data: PokemonResponse[]) => {
      this.pokemons = data;
    });
  }

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    window.location.reload();
  }
}

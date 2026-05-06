import { NuevoPokemonComponent } from './../features/pokemon/nuevo-pokemon-component/nuevo-pokemon-component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from '../models/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

      private apiUrl = environment.apiUrl + '/api/';

    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<any> {
      return this.http.get(this.apiUrl + 'pokemons');
    }

    addPokemon(pokemon: PokemonResponse): Observable<PokemonResponse> {
      return this.http.post<PokemonResponse>(this.apiUrl + 'pokemons', pokemon);
    }


    deletePokemon(id: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}pokemons/${id}`);
    }

  }


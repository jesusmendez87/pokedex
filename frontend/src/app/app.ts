import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexPageComponent } from "./features/pokemon/pokedex-page-component/pokedex-page-component";
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appProviders = [
  provideRouter(routes)
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcial');
}

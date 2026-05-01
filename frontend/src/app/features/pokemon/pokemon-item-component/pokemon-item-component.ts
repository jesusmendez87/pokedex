import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-item-component',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-item-component.html',
  styleUrl: './pokemon-item-component.css',
})
export class PokemonItemComponent {

  // Decoradores Input para recibir datos del componente padre
  @Input() nombre: string = '';
  @Input() tipo: string = '';
  @Input() urlImagen: string = '';
  @Input() id: string = '';


  // Evento que enviamos al padre
  @Output() eliminar = new EventEmitter<string>();

  // Función que se llama al pulsar el botón
  onEliminar(): void {
    this.eliminar.emit(this.id);
  }
}

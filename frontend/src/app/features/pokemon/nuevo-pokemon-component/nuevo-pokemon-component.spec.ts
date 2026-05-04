import { PokemonService } from './../../../core/pokemon-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPokemonComponent } from './nuevo-pokemon-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('NuevoPokemonComponent', () => {
  let component: NuevoPokemonComponent;
  let fixture: ComponentFixture<NuevoPokemonComponent>;
  let verPokemonMock: any;
  
 
  beforeEach(async () => {

    verPokemonMock = {
      addPokemon: jasmine.createSpy().and.returnValue(of([`charmander`, `fuego`, 'imagen pokemon'],[`pikachu`, `electrico`, 'imagen pokemon'],[`squirtle`, `agua`, 18, 3  ] ))
    }
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('debería crear los pokemon', () => {

  const pokemonService = TestBed.inject(PokemonService);

  spyOn(component.pokemonGuardado, 'emit');

  spyOn(pokemonService, 'addPokemon').and.returnValue(of({  nombre: 'Charmander',
  tipo: 'fuego',
  urlImagen: 'https://test.com/img.png'
}));
 
  component.nuevoPokemon = {
    nombre: 'Charmander',
    tipo: 'fuego',
    urlImagen: 'https://test.com/img.png'
  };
  component.cargarPokemon();

  expect(pokemonService.addPokemon).toHaveBeenCalled();
  expect(component.pokemonGuardado.emit).toHaveBeenCalled();

});

it ('debería mostrar una alerta si el nombre o tipo del pokemon no se completa', () => {
  const pokemonService = TestBed.inject(PokemonService);

  spyOn(window, 'alert');
  spyOn(pokemonService, 'addPokemon');

  component.nuevoPokemon = {
    nombre: '',
    tipo: 'fuego',
    urlImagen: 'https://test.com/img.png'
  };
  component.cargarPokemon();
  expect(window.alert).toHaveBeenCalledWith('Debes completar el nombre y tipo del Pokémon');  
  expect(pokemonService.addPokemon).not.toHaveBeenCalled();

});


});

import { Pokemon } from '../../../models/pokemon';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PokemonService } from '../../../core/pokemon-service';
import { off } from 'node:process';
import { PokedexPageComponent } from './pokedex-page-component';
 

describe('pokedex-page-component', () => {
  let component: PokedexPageComponent;
  let fixture: ComponentFixture<PokedexPageComponent>;
  let verPokemonMock: any;
  
 
  beforeEach(async () => {

  
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('debería listar pokemon', () => {
     
    verPokemonMock = {
        addPokemon: jasmine.createSpy().and.returnValue(of([`charmander`,
           `fuego`, 'imagen pokemon'],[`pikachu`, `electrico`, 'imagen pokemon'],[`squirtle`,
             `agua`,'imagen pokemon'    ] ))
      }
  const pokemonService = TestBed.createComponent(PokedexPageComponent);
  const component = pokemonService.componentInstance;

pokemonService.detectChanges();
expect(component).toBeTruthy();

});


});

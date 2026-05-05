import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon-service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener pokemons correctamente', () => {
    const mockData = [{ nombre: 'Pikachu', tipo: 'electrico', urlImagen: 'url' }];

    service.getPokemonList().subscribe((data) => {
      expect(data.length).toBe(1);
        expect(data[0].nombre).toBe('Pikachu');
    });
    const req = httpMock.expectOne((req) => req.url.includes('/api/pokemons'));
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });
});

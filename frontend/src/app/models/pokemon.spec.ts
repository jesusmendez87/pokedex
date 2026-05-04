import { Pokemon } from './pokemon';
import { PokemonResponse } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon( 'Pikachu', 'Eléctrico', 'https://example.com/pikachu.png'
    )).toBeTruthy();
  });
});

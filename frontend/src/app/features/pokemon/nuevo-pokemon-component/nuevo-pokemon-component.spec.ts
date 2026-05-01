import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPokemonComponent } from './nuevo-pokemon-component';

describe('NuevoPokemonComponent', () => {
  let component: NuevoPokemonComponent;
  let fixture: ComponentFixture<NuevoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

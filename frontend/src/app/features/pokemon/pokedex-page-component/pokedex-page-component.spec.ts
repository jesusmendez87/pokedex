import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { PokedexPageComponent } from './pokedex-page-component';

describe('PokedexPageComponent', () => {
  let component: PokedexPageComponent;
  let fixture: ComponentFixture<PokedexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

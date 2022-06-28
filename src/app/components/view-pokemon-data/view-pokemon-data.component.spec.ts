import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPokemonDataComponent } from './view-pokemon-data.component';

describe('ViewPokemonDataComponent', () => {
  let component: ViewPokemonDataComponent;
  let fixture: ComponentFixture<ViewPokemonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPokemonDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPokemonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

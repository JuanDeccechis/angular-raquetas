import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRaquetasComponent } from './lista-raquetas.component';

describe('ListaRaquetasComponent', () => {
  let component: ListaRaquetasComponent;
  let fixture: ComponentFixture<ListaRaquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRaquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRaquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

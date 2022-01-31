import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInscripcionesComponent } from './nuevo-inscripciones.component';

describe('NuevoInscripcionesComponent', () => {
  let component: NuevoInscripcionesComponent;
  let fixture: ComponentFixture<NuevoInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

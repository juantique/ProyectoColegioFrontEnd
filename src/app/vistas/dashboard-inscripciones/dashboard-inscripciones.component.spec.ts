import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInscripcionesComponent } from './dashboard-inscripciones.component';

describe('DashboardInscripcionesComponent', () => {
  let component: DashboardInscripcionesComponent;
  let fixture: ComponentFixture<DashboardInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

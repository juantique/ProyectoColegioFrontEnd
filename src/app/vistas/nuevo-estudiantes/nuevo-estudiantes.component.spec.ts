import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstudiantesComponent } from './nuevo-estudiantes.component';

describe('NuevoEstudiantesComponent', () => {
  let component: NuevoEstudiantesComponent;
  let fixture: ComponentFixture<NuevoEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEstudiantesComponent } from './dashboard-estudiantes.component';

describe('DashboardEstudiantesComponent', () => {
  let component: DashboardEstudiantesComponent;
  let fixture: ComponentFixture<DashboardEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsignaturasComponent } from './dashboard-asignaturas.component';

describe('DashboardAsignaturasComponent', () => {
  let component: DashboardAsignaturasComponent;
  let fixture: ComponentFixture<DashboardAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

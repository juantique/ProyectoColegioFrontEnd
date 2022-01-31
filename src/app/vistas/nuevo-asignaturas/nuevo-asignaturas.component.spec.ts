import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAsignaturasComponent } from './nuevo-asignaturas.component';

describe('NuevoAsignaturasComponent', () => {
  let component: NuevoAsignaturasComponent;
  let fixture: ComponentFixture<NuevoAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

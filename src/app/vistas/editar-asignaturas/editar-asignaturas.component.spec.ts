import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsignaturasComponent } from './editar-asignaturas.component';

describe('EditarAsignaturasComponent', () => {
  let component: EditarAsignaturasComponent;
  let fixture: ComponentFixture<EditarAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

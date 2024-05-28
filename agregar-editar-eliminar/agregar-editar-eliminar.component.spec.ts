import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEliminarComponent } from './agregar-editar-eliminar.component';

describe('AgregarEditarEliminarComponent', () => {
  let component: AgregarEditarEliminarComponent;
  let fixture: ComponentFixture<AgregarEditarEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

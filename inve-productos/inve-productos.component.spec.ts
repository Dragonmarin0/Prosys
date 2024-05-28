import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InveProductosComponent } from './inve-productos.component';

describe('InveProductosComponent', () => {
  let component: InveProductosComponent;
  let fixture: ComponentFixture<InveProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InveProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InveProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

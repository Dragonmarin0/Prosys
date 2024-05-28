import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navs2Component } from './navs2.component';

describe('Navs2Component', () => {
  let component: Navs2Component;
  let fixture: ComponentFixture<Navs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navs2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Navs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

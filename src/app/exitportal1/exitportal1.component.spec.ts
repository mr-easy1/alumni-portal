import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exitportal1Component } from './exitportal1.component';

describe('Exitportal1Component', () => {
  let component: Exitportal1Component;
  let fixture: ComponentFixture<Exitportal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exitportal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exitportal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

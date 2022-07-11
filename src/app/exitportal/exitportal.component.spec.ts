import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitportalComponent } from './exitportal.component';

describe('ExitportalComponent', () => {
  let component: ExitportalComponent;
  let fixture: ComponentFixture<ExitportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

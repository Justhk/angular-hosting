import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPopupComponent } from './process-popup.component';

describe('ProcessPopupComponent', () => {
  let component: ProcessPopupComponent;
  let fixture: ComponentFixture<ProcessPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

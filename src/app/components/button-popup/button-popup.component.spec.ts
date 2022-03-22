import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPopupComponent } from './button-popup.component';

describe('ButtonPopupComponent', () => {
  let component: ButtonPopupComponent;
  let fixture: ComponentFixture<ButtonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

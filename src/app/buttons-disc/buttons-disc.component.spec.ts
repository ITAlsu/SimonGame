import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDiscComponent } from './buttons-disc.component';

describe('ButtonsDiscComponent', () => {
  let component: ButtonsDiscComponent;
  let fixture: ComponentFixture<ButtonsDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

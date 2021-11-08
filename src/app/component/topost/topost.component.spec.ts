import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopostComponent } from './topost.component';

describe('TopostComponent', () => {
  let component: TopostComponent;
  let fixture: ComponentFixture<TopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

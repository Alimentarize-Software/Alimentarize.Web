import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSolidComponent } from './loading-solid.component';

describe('LoadingSolidComponent', () => {
  let component: LoadingSolidComponent;
  let fixture: ComponentFixture<LoadingSolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSolidComponent]
    });
    fixture = TestBed.createComponent(LoadingSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormsComponent } from './layout-image-forms.component';

describe('ImageFormsComponent', () => {
  let component: ImageFormsComponent;
  let fixture: ComponentFixture<ImageFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFormsComponent],
    });
    fixture = TestBed.createComponent(ImageFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

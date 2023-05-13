import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodConsultingComponent } from './food-consulting.component';

describe('FoodConsultingComponent', () => {
  let component: FoodConsultingComponent;
  let fixture: ComponentFixture<FoodConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodConsultingComponent]
    });
    fixture = TestBed.createComponent(FoodConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

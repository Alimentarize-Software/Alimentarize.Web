import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstitutionComponent } from './card-institution.component';

describe('CardInstitutionComponent', () => {
  let component: CardInstitutionComponent;
  let fixture: ComponentFixture<CardInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInstitutionComponent]
    });
    fixture = TestBed.createComponent(CardInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

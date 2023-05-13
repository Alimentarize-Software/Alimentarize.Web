import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverComponent } from './giver.component';

describe('GiverComponent', () => {
  let component: GiverComponent;
  let fixture: ComponentFixture<GiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiverComponent]
    });
    fixture = TestBed.createComponent(GiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

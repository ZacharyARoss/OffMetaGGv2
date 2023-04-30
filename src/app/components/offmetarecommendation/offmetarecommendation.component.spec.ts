import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffmetarecommendationComponent } from './offmetarecommendation.component';

describe('OffmetarecommendationComponent', () => {
  let component: OffmetarecommendationComponent;
  let fixture: ComponentFixture<OffmetarecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffmetarecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffmetarecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

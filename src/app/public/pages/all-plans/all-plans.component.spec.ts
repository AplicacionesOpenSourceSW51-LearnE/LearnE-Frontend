import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlansComponent } from './all-plans.component';

describe('AllPlansComponent', () => {
  let component: AllPlansComponent;
  let fixture: ComponentFixture<AllPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

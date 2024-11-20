import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringManagementComponent } from './tutoring-management.component';

describe('TutoringManagementComponent', () => {
  let component: TutoringManagementComponent;
  let fixture: ComponentFixture<TutoringManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoringManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoringManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringReservationComponent } from './tutoring-reservation.component';

describe('TutoringReservationComponent', () => {
  let component: TutoringReservationComponent;
  let fixture: ComponentFixture<TutoringReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoringReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoringReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

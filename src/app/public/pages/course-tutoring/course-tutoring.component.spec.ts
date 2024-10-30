import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTutoringComponent } from './course-tutoring.component';

describe('CourseTutoringComponent', () => {
  let component: CourseTutoringComponent;
  let fixture: ComponentFixture<CourseTutoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTutoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

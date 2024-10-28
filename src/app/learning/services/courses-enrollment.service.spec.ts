import { TestBed } from '@angular/core/testing';

import { CoursesEnrollmentService } from './courses-enrollment.service';

describe('CoursesEnrollmentService', () => {
  let service: CoursesEnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesEnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

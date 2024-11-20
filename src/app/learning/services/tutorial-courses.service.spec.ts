import { TestBed } from '@angular/core/testing';

import { TutorialCoursesService } from './tutorial-courses.service';

describe('TutorialCoursesService', () => {
  let service: TutorialCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

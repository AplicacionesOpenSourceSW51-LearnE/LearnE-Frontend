import { TestBed } from '@angular/core/testing';

import { TutorialReservatedService } from './tutorial-reservated.service';

describe('TutorialReservatedService', () => {
  let service: TutorialReservatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialReservatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

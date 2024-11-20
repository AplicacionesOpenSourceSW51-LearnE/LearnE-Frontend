import { TestBed } from '@angular/core/testing';

import { ExamsNoteService } from './exams-note.service';

describe('ExamsNoteService', () => {
  let service: ExamsNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

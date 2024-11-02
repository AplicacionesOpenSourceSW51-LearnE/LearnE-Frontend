import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVideoEditComponent } from './course-video-edit.component';

describe('CourseVideoEditComponent', () => {
  let component: CourseVideoEditComponent;
  let fixture: ComponentFixture<CourseVideoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseVideoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseVideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

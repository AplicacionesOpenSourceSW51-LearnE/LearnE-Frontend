import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditContentComponent } from './course-edit-content.component';

describe('CourseEditContentComponent', () => {
  let component: CourseEditContentComponent;
  let fixture: ComponentFixture<CourseEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseEditContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

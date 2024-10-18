import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSidenavComponent } from './course-sidenav.component';

describe('CourseSidenavComponent', () => {
  let component: CourseSidenavComponent;
  let fixture: ComponentFixture<CourseSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

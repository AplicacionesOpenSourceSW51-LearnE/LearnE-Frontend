import {Component, inject, OnInit} from '@angular/core';
import {Course} from "../../../learning/model/course.entity";
import {CourseService} from "../../../learning/services/course.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {CoursesEnrollmentService} from "../../../learning/services/courses-enrollment.service";
import {CoursesEnrollment} from "../../../learning/model/courses-enrollment.entity";

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent implements OnInit{
  private courseService: CourseService = inject(CourseService);
  private courseEnrollmentService: CoursesEnrollmentService = inject(CoursesEnrollmentService);
  protected dataSource!: Array<any>;

  constructor(private router: Router) {
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.getAllCoursesEnrollment();
  }

  private getAllCourses(enrolledCourses: Array<CoursesEnrollment>) {
    const courseIds = enrolledCourses.map(enrollment => enrollment.course_id);
    this.courseService.getAll().subscribe((response: Array<Course>) => {
      this.dataSource = response.filter(course => courseIds.includes(course.id));
      console.log(this.dataSource);
    })
  }

  private getAllCoursesEnrollment() {
    this.courseEnrollmentService.getAll().subscribe((response: Array<CoursesEnrollment>) => {
      const enrolledCourses = response.filter(enrollment =>
          enrollment.student_id === Number(sessionStorage.getItem('id')));
      this.getAllCourses(enrolledCourses);
    })
  }

  goToCourseSideNav(course: Course): void {
    this.courseService.setSelectedCourse(course);
    this.router.navigate(['/courseSidenav'], {queryParams: {description: course.description}});
  }
}

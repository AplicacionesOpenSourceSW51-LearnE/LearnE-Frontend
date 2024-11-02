import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {RatingDialogComponent} from "../rating-dialog/rating-dialog.component";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Exam} from "../../../learning/model/exam.entity";
import {ExamService} from "../../../learning/services/exam.service";
import {TranslateModule} from "@ngx-translate/core";
import {CoursesEnrollmentService} from "../../../learning/services/courses-enrollment.service";
import {CoursesEnrollment} from "../../../learning/model/courses-enrollment.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    NgClass,
    NgForOf,
    NgIf,
    MatDialogModule,
    MatProgressBarModule,
    RatingDialogComponent,
    NgOptimizedImage,
    TranslateModule,
  ],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  teachers: User | null = null;
  selectedCourse: Course | null = null;
  exams: Array<Exam> = [];
  enrollments: Array<CoursesEnrollment> = [];
  studentId = Number(sessionStorage.getItem('id'));
  typePlan = Number(sessionStorage.getItem('type_plan'));
  isEnrolled: boolean = false;

  constructor(private userService: UserService, private courseService: CourseService,
              private sanitizer: DomSanitizer, private examService: ExamService,
              private enrollmentCourse: CoursesEnrollmentService, private router: Router) {
  }

  ngOnInit() {
    this.selectedCourse = this.courseService.getSelectedCourse();
    if (this.selectedCourse) {
      console.log(this.selectedCourse);
    }
    this.getTeacher();
    this.getAllExams();
  }

  private getTeacher() {
    this.userService.getById(this.selectedCourse?.id).subscribe((response: User) => {
      this.teachers = response;
      console.log(this.teachers);
    })
  }

  private getAllExams() {
    this.examService.getAll().subscribe((response: Array<Exam>) => {
      this.exams = response.filter(ex => ex.course_id == this.selectedCourse?.id)
    })
  }

  addEnrollmentCourse() {
    this.enrollmentCourse.getAll().subscribe((response: Array<CoursesEnrollment>) => {
      this.enrollments = response.filter(en => en.student_id == this.studentId);
      this.isEnrolled = this.enrollments.some(enrollment => enrollment.course_id === this.selectedCourse?.id);
      if (this.isEnrolled) {
        alert('You are already enrolled in this course');
        return;
      }
      if (this.typePlan == 0) {
        if (this.enrollments.length < 3) {
          let courseEnrollment = new CoursesEnrollment({
            student_id: this.studentId,
            course_id: this.selectedCourse?.id
          });
          this.enrollmentCourse.create(courseEnrollment).subscribe(() => {
            this.router.navigate(['/mainPage/myCourses']);
          });
        } else {
          alert('Your limit is for 3 courses, change your plan if you want more');
        }
      } else {
        let courseEnrollment = new CoursesEnrollment({
          student_id: this.studentId,
          course_id: this.selectedCourse?.id
        });
        this.enrollmentCourse.create(courseEnrollment).subscribe(() => {
          this.router.navigate(['/mainPage/myCourses']);
        });
      }
    })
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

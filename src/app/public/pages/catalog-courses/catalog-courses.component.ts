import { Component } from '@angular/core';
import {Course} from "../../../learning/model/course.entity";
import {CourseService} from "../../../learning/services/course.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog-courses',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './catalog-courses.component.html',
  styleUrl: './catalog-courses.component.css'
})
export class CatalogCoursesComponent {
  courses: Array<Course> = [];
  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll().subscribe((response: Array<Course>) => {
      this.courses = response;
      console.log(this.courses);
    })
  }

  goToCourseDetails(course: Course) {
    this.courseService.setSelectedCourse(course);
    this.router.navigate(['/mainPage/courseDetails']);
  }
}

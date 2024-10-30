import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TutorialCoursesService} from "../../../learning/services/tutorial-courses.service";
import {TutorialCourses} from "../../../learning/model/tutorial-courses.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-course-tutoring',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    MatCardSubtitle
  ],
  templateUrl: './course-tutoring.component.html',
  styleUrl: './course-tutoring.component.css'
})
export class CourseTutoringComponent {
  courseId: number | null = null;
  tutoring: Array<TutorialCourses> = [];

  constructor(private route: ActivatedRoute, private tutoringService: TutorialCoursesService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id'] ? Number(params['id']) : null;
      if (this.courseId) {
        this.loadTutorial();
      }
    })
  }

  loadTutorial() {
    if (this.courseId) {
      this.tutoringService.getAll().subscribe((response: Array<TutorialCourses>) => {
        this.tutoring = response.filter(tutorial => tutorial.courses_id === this.courseId);
        console.log(this.tutoring);
      })
    }
  }
}

import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TutorialCoursesService} from "../../../learning/services/tutorial-courses.service";
import {TutorialCourses} from "../../../learning/model/tutorial-courses.entity";

@Component({
  selector: 'app-course-tutoring',
  standalone: true,
  imports: [],
  templateUrl: './course-tutoring.component.html',
  styleUrl: './course-tutoring.component.css'
})
export class CourseTutoringComponent {
  tutorialId: number | null = null;
  tutoring: Array<TutorialCourses> = [];

  constructor(private route: ActivatedRoute, private tutoringService: TutorialCoursesService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.tutorialId = params['id'] ? Number(params['id']) : null;
      if (this.tutorialId) {
        this.loadTutorial();
      }
    })
  }

  loadTutorial() {
    if (this.tutorialId) {
      this.tutoringService.getAll().subscribe((response: Array<TutorialCourses>) => {
        this.tutoring = response;
        console.log(this.tutoring);
      })
    }
  }
}

import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TutorialCoursesService} from "../../../learning/services/tutorial-courses.service";
import {TutorialCourses} from "../../../learning/model/tutorial-courses.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {TutorialReservated} from "../../../learning/model/tutorial-reservated.entity";
import {TutorialReservatedService} from "../../../learning/services/tutorial-reservated.service";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-course-tutoring',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    MatCardSubtitle,
    MatButtonToggle,
    MatButton,
    NgIf,
    TranslateModule
  ],
  templateUrl: './course-tutoring.component.html',
  styleUrl: './course-tutoring.component.css'
})
export class CourseTutoringComponent {
  courseId: number | null = null;
  tutoring: Array<TutorialCourses> = [];
  tutorialRes: Array<TutorialReservated> = [];
  tutorialResInfo: Array<TutorialCourses> = [];
  studentId = Number(sessionStorage.getItem('id'));

  constructor(private route: ActivatedRoute, private tutoringService: TutorialCoursesService,
              private tutorialReservatedService: TutorialReservatedService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id'] ? Number(params['id']) : null;
      if (this.courseId) {
        this.loadTutorial();
        this.loadTutorialReservated();
      }
    })
  }

  loadTutorial() {
    if (this.courseId) {
      this.tutoringService.getAll().subscribe((response: Array<TutorialCourses>) => {
        this.tutoring = response.filter(
          tutorial => tutorial.courses_id === this.courseId && !tutorial.is_reservated);
        console.log(this.tutoring);
      })
    }
  }

  loadTutorialReservated() {
    if (this.courseId) {
      // Filtra las reservaciones del estudiante
      this.tutorialReservatedService.getAll().subscribe((response: Array<TutorialReservated>) => {
        this.tutorialRes = response.filter(tuto => tuto.student_id === this.studentId);

        // Obtén las tutorías reservadas para el estudiante
        this.tutoringService.getAll().subscribe((tutorial: Array<TutorialCourses>) => {
          // Filtra solo las tutorías que están reservadas y que coinciden con las reservaciones del estudiante
          this.tutorialResInfo = tutorial.filter(response =>
            response.is_reservated && this.tutorialRes.some(res => res.tutorial_id === response.id)
          );
        });
      });
    }
  }


  registerTutorial(tutorialId: number, studentId: number) {
    const tutorial = this.tutoring.find(tut => tut.id === tutorialId);
    if (tutorial && !tutorial.is_reservated) {
      const tutorialReservated = new TutorialReservated({student_id: studentId, tutorial_id: tutorialId});
      this.tutorialReservatedService.create(tutorialReservated).subscribe({
        next: (response) => {
          console.log(response);
          tutorial.is_reservated = true;
          this.tutoringService.update(tutorial.id, {...tutorial, is_reservated: true}).subscribe({
            next: (updateResponse) => console.log(updateResponse),
            error: (updateError) => console.log(updateError)
          })
        }
      })
    }
  }

  enterLink(tutorialId: number) {
    const tutorial = this.tutoring.find(tut => tut.id === tutorialId);
    if (tutorial && tutorial.link != '') {
      window.open(tutorial.link, '_blank');
    } else {
      console.warn('Tutorial invalid link');
    }
  }
}

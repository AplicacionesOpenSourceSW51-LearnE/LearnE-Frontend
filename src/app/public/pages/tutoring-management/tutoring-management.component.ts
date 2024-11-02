import { Component } from '@angular/core';
import {MatLabel} from "@angular/material/form-field";
import {MatCard, MatCardContent} from "@angular/material/card";
import {TutorialReservated} from "../../../learning/model/tutorial-reservated.entity";
import {TutorialReservatedService} from "../../../learning/services/tutorial-reservated.service";
import {TutorialCourses} from "../../../learning/model/tutorial-courses.entity";
import {TutorialCoursesService} from "../../../learning/services/tutorial-courses.service";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {ReservedTutorialDetail} from "../../../learning/model/reserved-tutorial-detail.entity";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {CourseService} from "../../../learning/services/course.service";


@Component({
  selector: 'app-tutoring-management',
  standalone: true,
  imports: [
    MatLabel,
    MatCard,
    MatCardContent,
    NgForOf,
    FormsModule,
    NgIf,
    TranslateModule

  ],
  templateUrl: './tutoring-management.component.html',
  styleUrl: './tutoring-management.component.css'
})
export class TutoringManagementComponent {
  teacherId = Number(sessionStorage.getItem('id'));
  // teacherId = Number(3);
  // courseId = Number(1);
  courseId: number | undefined;
  date: string = "";
  hour: string = "";
  link: string = "";
  reservedTutorials: Array<TutorialCourses> = [];
  unreservedTutorials: Array<TutorialCourses> = [];
  registeredTutorials: Array<TutorialCourses> = [];
  registeredReservedTutorials: Array<TutorialReservated> = [];
  students: Array<User> = [];
  reservedTutorialsDetails: Array<ReservedTutorialDetail> = [];
  isEditingLink: boolean = false;
  selectedReservedTutorial: ReservedTutorialDetail = new ReservedTutorialDetail({});

  constructor(private reservedTutorialsApiService: TutorialReservatedService,
              private reservedTutorialsInfoApiService: TutorialCoursesService,
              private userApiService: UserService, private courseApiService: CourseService) {
  }

  ngOnInit() {
    this.getCourseId();
    this.getTutorials();
  }

  private getCourseId() {
    // this.courseId = this.courseApiService.getSelectedCourse()?.id;
    this.courseId = this.courseApiService.getSelectedCourse()?.id ?? -1;
  }

  private getTutorials() {
    this.reservedTutorialsInfoApiService.getAll().subscribe((response: Array<TutorialCourses>) => {
      this.registeredTutorials = response.filter(tutorial => (tutorial.teacher_id == this.teacherId && tutorial.courses_id == this.courseId));

      this.reservedTutorials = this.registeredTutorials.filter(reservedTutorial => reservedTutorial.is_reservated);
      this.unreservedTutorials = this.registeredTutorials.filter(unreservedTutorial => !unreservedTutorial.is_reservated);

      const tutorialIds = this.reservedTutorials.map(reservedTutorial => reservedTutorial.id);

      this.reservedTutorialsApiService.getAll().subscribe((response: Array<TutorialReservated>) => {
        this.registeredReservedTutorials = response.filter(registeredReservedtutorial => tutorialIds.includes(registeredReservedtutorial.tutorial_id));

        console.log(this.reservedTutorials);
        console.log(this.unreservedTutorials);
        console.log(this.registeredReservedTutorials);

        this.getStudents();
      })

    })

  }

  private getStudents() {
    const studentIds = this.registeredReservedTutorials.map(registeredReservedTutorial => registeredReservedTutorial.student_id);

    this.userApiService.getAll().subscribe((response: Array<User>) => {
      this.students = response.filter(student => studentIds.includes(student.id));

      this.buildArrayReservedTutorialsDetails();
    })
  }

  private buildArrayReservedTutorialsDetails() {
    this.reservedTutorialsDetails = this.registeredReservedTutorials.map((registeredReservedTutorials) => {
      const student = this.students.find(s => s.id == registeredReservedTutorials.student_id);
      const tutorial = this.reservedTutorials.find(t => t.id = registeredReservedTutorials.tutorial_id);

      return new ReservedTutorialDetail({
        date: tutorial?.date || "",
        hour: tutorial?.hour || "",
        studentFullName: (student?.firstName || "") + " " + (student?.lastName || ""),
        link: tutorial?.link,
        tutorialId: tutorial?.id
      });
    })

    console.log(this.reservedTutorialsDetails);
  }

  public addReservedTutorial() {
    if(this.date == "" || this.hour == "") {
      alert('All fields are required.');
      return;
    }
    let reservedTutorial = new TutorialCourses({
      courses_id: this.courseId,
      teacher_id: this.teacherId,
      date: this.date,
      hour: this.hour,
      is_reservated: false,
      link: ""
    })

    this.reservedTutorialsInfoApiService.create(reservedTutorial).subscribe((response: TutorialCourses) => {
      console.log(response);

      this.date = "";
      this.hour = "";

      this.getTutorials();
    })

  }

  public openInputLink() {
    this.isEditingLink = true;
  }

  public updateLink(selectedReservedTutorial: ReservedTutorialDetail) {
    if(this.link == "") {
      alert('New link is required.');
      return;
    }

    this.selectedReservedTutorial = selectedReservedTutorial;

    let updatedReservedTutorial = new TutorialCourses({
      id: this.selectedReservedTutorial.tutorialId,
      courses_id: this.courseId,
      teacher_id: this.teacherId,
      date: this.selectedReservedTutorial.date,
      hour: this.selectedReservedTutorial.hour,
      is_reservated: true,
      link: this.link
    })

    this.reservedTutorialsInfoApiService.update(updatedReservedTutorial.id, updatedReservedTutorial).subscribe((response: TutorialCourses) => {
      console.log(response);

      this.getTutorials();
      this.isEditingLink = false;
      this.link = "";

    })

  }

  public cancelUpdateLink() {
    this.isEditingLink = false;
    this.link = "";
  }
}

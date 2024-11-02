import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ExamsNoteService} from "../../../learning/services/exams-note.service";
import {ExamService} from "../../../learning/services/exam.service";
import {CourseService} from "../../../learning/services/course.service";
import {ExamNote} from "../../../learning/model/exam-note.entity";
import {Course} from "../../../learning/model/course.entity";
import {Exam} from "../../../learning/model/exam.entity";
import {GradeStudent} from "../../../learning/model/grade-student.entity";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [
    TranslateModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    NgForOf,
    NgIf
  ],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {
  examsNotes: Array<ExamNote> = [];
  exams: Array<Exam> = [];
  courses: Array<Course> = [];
  studentId = Number(sessionStorage.getItem('id'));
  gradesStudents: Array<GradeStudent> = [];

  constructor(private examsNoteApiService: ExamsNoteService, private examsApiService: ExamService,
              private courseApiService: CourseService) {
  }

  ngOnInit() {
    this.getGradesInfo();
  }

  private getGradesInfo() {
    this.examsNoteApiService.getAll().subscribe((response: Array<ExamNote>) => {
      this.examsNotes = response.filter(examNote => examNote.student_id === this.studentId);
      console.log(this.examsNotes);

      // Crear un array con los exam_id de examsNotes
      const examIds = this.examsNotes.map(examNote => examNote.exam_id);

      this.examsApiService.getAll().subscribe((response: Array<Exam>) => {
        // Filtrar exámenes que tengan un id incluido en examIds
        this.exams = response.filter(exam => examIds.includes(exam.id));
        console.log(this.exams);

        // Obtener courseIds después de que exams se haya completado
        const courseIds = this.exams.map(exam => exam.course_id);

        this.courseApiService.getAll().subscribe((response: Array<Course>) => {
          this.courses = response.filter(course => courseIds.includes(course.id));
          console.log(this.courses);

          this.buildArrayGradesStudents();

        });
      });
    });
  };

  private buildArrayGradesStudents() {
    // for(let i = 0; i < this.examsNotes.length; i ++) {
    //   this.gradesStudents[i].score = this.examsNotes[i].note;
    // }
    // console.log(this.gradesStudents);

    this.gradesStudents = this.examsNotes.map((examNote) => {
      // Encontrar el examen y el curso correspondientes
      const exam = this.exams.find(e => e.id === examNote.exam_id);
      const course = this.courses.find(c => c.id === exam?.course_id);

      // Crear un nuevo objeto GradeStudent con los valores encontrados
      return new GradeStudent({
        nameCourse: course?.title || "Curso no encontrado",
        nameExam: exam?.title || "Examen no encontrado",
        score: examNote.note
      });
    });

    console.log(this.gradesStudents);
  }
}

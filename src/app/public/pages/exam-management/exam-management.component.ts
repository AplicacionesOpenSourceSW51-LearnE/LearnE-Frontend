import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatLabel} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {Exam} from "../../../learning/model/exam.entity";
import {ExamService} from "../../../learning/services/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../learning/services/question.service";
import {AnswersService} from "../../../learning/services/answers.service";
import {Question} from "../../../learning/model/question.entity";
import {Answers} from "../../../learning/model/answers.entity";
import {Unit} from "../../../learning/model/unit.entity";
import {Course} from "../../../learning/model/course.entity";
import {CourseService} from "../../../learning/services/course.service";

@Component({
  selector: 'app-exam-management',
  standalone: true,
  imports: [
    MatLabel,
    TranslateModule,
    NgForOf,
    MatCheckbox,
    FormsModule
  ],
  templateUrl: './exam-management.component.html',
  styleUrl: './exam-management.component.css'
})
export class ExamManagementComponent {
  unitId: number | null = null;
  @Input() examData = new Exam({});
  @Output() examSaved = new EventEmitter<Exam>();
  questions: Question[] = [];
  answers: Answers[] = [];
  selectedCourse: Course | null = null;


  constructor(private examService: ExamService, private route: ActivatedRoute, private router: Router,
              private questionService: QuestionService, private answerService: AnswersService,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.unitId = params['id'] ? Number(params['id']) : null;
      if (this.unitId) {
        this.examData.unit_id = this.unitId;
      }
      this.selectedCourse = this.courseService.getSelectedCourse();
      if (this.selectedCourse){
        this.examData.course_id = this.selectedCourse.id;
      }
    });
  }

  addQuestion() {
    const newQuestion = new Question({ exam_id: this.examData.id, question: "" });
    this.questions.push(newQuestion);
  }

  addAnswer(questionId: number) {
    const newAnswer = new Answers({ question_id: questionId, is_correct: false, description: "" });
    this.answers.push(newAnswer);
  }

  getAnswersForQuestion(questionId: number): Answers[] {
    return this.answers.filter(answer => answer.question_id === questionId);
  }

  /*protected async saveExam() {
    this.examService.create(this.examData).subscribe({
      next: (createdExam) => {
        const questionsLength = this.questions.length;
        let questionsSaved = 0;
        for (let i = 0; i < questionsLength; i++) {
          const question = this.questions[i];
          question.exam_id = createdExam.id;
          this.questionService.create(question).subscribe({
            next: (createdQuestion) => {
              const answersForQuestion = this.answers.filter(answer => answer.question_id === question.id);
              let answersSaved = 0;
              if (answersForQuestion.length > 0) {
                for (let j = 0; j < answersForQuestion.length; j++) {
                  const answer = answersForQuestion[j];
                  answer.question_id = createdQuestion.id;

                  this.answerService.create(answer).subscribe({
                    next: () => {
                      answersSaved++;
                      if (answersSaved === answersForQuestion.length) {
                        questionsSaved++;
                        if (questionsSaved === questionsLength) {
                          this.examSaved.emit(createdExam);
                          console.log('Examen, preguntas y respuestas guardados con éxito');
                        }
                      }
                    },
                    error: (error) => {
                      console.error("Error al guardar respuestas:", error);
                    }
                  });
                }
              } else {
                questionsSaved++;
                if (questionsSaved === questionsLength) {
                  this.examSaved.emit(createdExam);
                  console.log('Examen, preguntas y respuestas guardados con éxito');
                }
              }
            },
            error: (error) => {
              console.error("Error al guardar preguntas:", error);
            }
          });
        }
      },
      error: (error) => {
        console.error("Error al guardar el examen:", error);
      }
    });
  }*/
  async saveExam() {
    try {
      const createdExam = await this.examService.create(this.examData).toPromise();
      // Guardar las preguntas asociadas al examen
      for (/*const question of this.questions*/let j = 0; j < this.questions.length; j++) {
        if (createdExam) this.questions[j].exam_id = createdExam.id;
        const createdQuestion = await this.questionService.create(this.questions[j]).toPromise();
        // Guardar las respuestas para cada pregunta
        const answersForQuestion = this.getAnswersForQuestion(this.questions[j].id);
        for (/*const answer of answersForQuestion*/let i = 0; i < answersForQuestion.length; i++) {
          if (createdQuestion != null) this.answers[i].question_id = createdQuestion.id;
          await this.answerService.create(this.answers[i]).toPromise();
        }
      }
      // Emitir el examen guardado
      this.examSaved.emit(createdExam);
      console.log('Examen, preguntas y respuestas guardados con éxito');
    } catch (error) {
      console.error("Error al guardar el examen:", error);
    }
  }
}

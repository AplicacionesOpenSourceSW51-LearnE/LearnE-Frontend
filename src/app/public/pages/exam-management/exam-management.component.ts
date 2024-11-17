import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
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
import {Course} from "../../../learning/model/course.entity";
import {CourseService} from "../../../learning/services/course.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-exam-management',
  standalone: true,
  imports: [
    MatLabel,
    TranslateModule,
    NgForOf,
    MatCheckbox,
    FormsModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './exam-management.component.html',
  styleUrl: './exam-management.component.css'
})
export class ExamManagementComponent implements OnInit{
  unitId: number | null = null;
  examData = new Exam({});
  questions: Array<Question> = [];
  answers: Answers[] = [];
  selectedCourse: Course | null = null;
  questionsWithAnswers: Array<{ question: Question, answers: Answers[] }> = [];


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
      this.examData = new Exam({
        title: '',
        unit_id: this.unitId || 0,
        course_id: this.selectedCourse?.id
      });
    });
  }

  addQuestion() {
    const newQuestion = new Question({
      exam_id: this.examData.id
    });
    this.questionsWithAnswers.push({
      question: newQuestion,
      answers: [
        new Answers({ question_id: newQuestion.id }),
        new Answers({ question_id: newQuestion.id }),
        new Answers({ question_id: newQuestion.id })
      ]
    });
  }

  cancelExamCreation() {
    this.router.navigate(['/courseEditContent']);
  }

  saveNewExam() {
    this.examService.create(this.examData).subscribe({
      next: (examResponse) => {
        const examId = examResponse.id;
        this.questionsWithAnswers.forEach(({ question, answers }) => {
          const questionPayLoad = {
            id: 0,
            exam_id: examId,
            question: question.question
          };
          this.questionService.create(questionPayLoad).subscribe({
            next: (questionResponse) => {
              const questionId = questionResponse.id;
              answers.forEach(answer => {
                const answerPayLoad = {
                  id: 0,
                  question_id: questionId,
                  is_correct: answer.is_correct,
                  description: answer.description
                };
                this.answerService.create(answerPayLoad).subscribe();
              });
              this.router.navigate(['/courseEditContent']);
            }
          });
        });
      }
    });
  }
}

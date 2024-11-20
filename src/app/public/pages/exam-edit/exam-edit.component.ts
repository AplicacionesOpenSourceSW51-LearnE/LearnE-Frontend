import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Question} from "../../../learning/model/question.entity";
import {Answers} from "../../../learning/model/answers.entity";
import {ExamNote} from "../../../learning/model/exam-note.entity";
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../learning/services/exam.service";
import {QuestionService} from "../../../learning/services/question.service";
import {AnswersService} from "../../../learning/services/answers.service";
import {ExamsNoteService} from "../../../learning/services/exams-note.service";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-exam-edit',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatRadioButton,
    MatRadioGroup,
    NgForOf,
    NgIf,
    TranslateModule,
    NgClass,
    MatButton,
    FormsModule
  ],
  templateUrl: './exam-edit.component.html',
  styleUrl: './exam-edit.component.css'
})
export class ExamEditComponent {
  examId: number | null = null;
  exam: any;
  questions: Array<Question> = [];
  answers: Array<Answers> = [];
  selectedAnswers: Array<number | null> = [];
  examSend: boolean = true;

  constructor(private route: ActivatedRoute, private examService: ExamService,
              private questionService: QuestionService, private answerService: AnswersService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.examId = params['id'] ? Number(params['id']) : null;
      if (this.examId) {
        this.loadExam();
      }
    })
  }

  loadExam() {
    if (this.examId) {
      this.examService.getById(this.examId).subscribe(exam => {
        this.exam = exam;
        this.loadQuestions();
      })
    }
  }

  private loadQuestions() {
    if (this.exam && this.examId) {
      this.questionService.getAll().subscribe((response: Array<Question>) => {
        this.questions = response.filter(question => question.exam_id === this.exam.id);
        this.selectedAnswers = new Array(this.questions.length).fill(null);
        console.log(this.questions);
        this.loadAnswers();
      })
    }
  }

  private loadAnswers() {
    if (this.questions.length > 0) {
      this.answerService.getAll().subscribe((response: Array<Answers>) => {
        this.answers = response;
        console.log(this.answers);
      })
    }
  }
}

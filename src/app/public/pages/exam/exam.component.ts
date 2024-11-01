import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
  MatCard,
  MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {ExamService} from "../../../learning/services/exam.service";
import {QuestionService} from "../../../learning/services/question.service";
import {AnswersService} from "../../../learning/services/answers.service";
import {Question} from "../../../learning/model/question.entity";
import {Answers} from "../../../learning/model/answers.entity";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {ExamNote} from "../../../learning/model/exam-note.entity";
import {ExamsNoteService} from "../../../learning/services/exams-note.service";

@Component({
  selector: 'app-exam',
  standalone: true,
    imports: [
        MatIcon,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCardTitle,
        MatCardSubtitle,
        MatFormField,
        MatInput,
        MatLabel,
        MatHint,
        MatButton,
        MatCardAvatar,
        TranslateModule,
        NgForOf,
        MatCheckbox,
        MatRadioGroup,
        MatRadioButton,
        NgIf,
        FormsModule
    ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
    examId: number | null = null;
    exam: any;
    questions: Array<Question> = [];
    answers: Array<Answers> = [];
    selectedAnswers: Array<number | null> = [];
    note: number = 0;
    finalScore: number = 0;
    examSend: boolean = false;
    savedExamNote: ExamNote | null = null;

    constructor(private route: ActivatedRoute, private examService: ExamService,
                private questionService: QuestionService, private answerService: AnswersService,
                private examsNoteService: ExamsNoteService) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.examId = params['id'] ? Number(params['id']) : null;
            if (this.examId) {
              this.examsNoteService.getAll().subscribe((notes: ExamNote[]) => {
                const existingNote = notes.find(
                  note => note.student_id === Number(sessionStorage.getItem('id')) && note.exam_id === this.examId);
                  if (existingNote) {
                    this.savedExamNote = existingNote;
                    this.examSend = true;
                  }
              })
              this.loadExam();
            }
        })
    }

  get displayNote(): number {
    return this.examSend && this.savedExamNote ? this.savedExamNote.note : 0;
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

    calculateScore() {
      if (this.examSend) return;
      this.note = 0;
      this.questions.forEach((question, index) => {
        const correctAnswer = this.answers.find(
          answer => answer.question_id === question.id && answer.is_correct
        );
        if (correctAnswer && this.selectedAnswers[index] === correctAnswer.id) {
          this.note += 1;
        }
      });
      this.finalScore = (this.note / this.questions.length) * 20;
      alert('Your exam is send');
      this.saveExamNote();
    }

    private saveExamNote() {
      if (this.examId) {
        const examNote = new ExamNote({
          student_id: Number(sessionStorage.getItem('id')),
          exam_id: this.examId,
          note: this.finalScore
        });
        this.examsNoteService.create(examNote).subscribe((createdNote) => {
          this.savedExamNote = createdNote;
          this.examSend = true;
        })
      }
    }
}

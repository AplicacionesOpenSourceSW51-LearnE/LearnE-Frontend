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
import {CourseService} from "../../../learning/services/course.service";
import {NgForOf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";

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
      MatCheckbox
    ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
    examId: number | null = null;
    exam: any;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('queryParams: ', params);
            const id = params['id'];
            this.examId = id ? Number(id): null;
            console.log('sectionId: ', this.examId);
        })

        if (this.examId) {
            this.loadExam();
        }

    }

    loadExam() {
        this.exam = this.courseService.getExamById(this.examId || 0);
    }
}

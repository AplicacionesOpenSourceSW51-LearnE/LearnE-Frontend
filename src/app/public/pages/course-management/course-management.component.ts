import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css'
})
export class CourseManagementComponent {
  selectedCourse: Course | null = null;
  constructor(private courseService: CourseService) {}
  ngOnInit() {
    this.selectedCourse = this.courseService.getSelectedCourse()
  }
}

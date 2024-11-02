import {Component, inject, OnInit} from '@angular/core';
import {CourseService} from "../../../learning/services/course.service";
import {Router} from "@angular/router";
import {Course} from "../../../learning/model/course.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    NgForOf,
    TranslateModule,
    MatIcon
  ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit{
  private courseService: CourseService = inject(CourseService);
  protected dataSource!: Array<any>;
  userId = Number(sessionStorage.getItem('id'));

  constructor(private router: Router) {
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.getAllCourses();
  }

  private getAllCourses() {
    this.courseService.getAll().subscribe((response: Array<Course>) => {
      this.dataSource = response.filter(course => course.teacher_id === this.userId);
    })
  }

  goToCourseManagement(course: Course): void {
    this.courseService.setSelectedCourse(course);
    this.router.navigate(['/mainPage/courseManagement']);
  }
}

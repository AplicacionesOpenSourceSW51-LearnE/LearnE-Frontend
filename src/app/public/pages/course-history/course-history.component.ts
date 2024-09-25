import {Component, OnInit} from '@angular/core';
import {MatList, MatListItem, MatListItemAvatar} from "@angular/material/list";
import {NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {CourseService} from "../../../shared/services/course.service";

@Component({
  selector: 'app-course-history',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    NgForOf,
    MatListItemAvatar,
    MatLine
  ],
  templateUrl: './course-history.component.html',
  styleUrl: './course-history.component.css'
})
export class CourseHistoryComponent implements OnInit {
  courses: any[] = [];
  constructor(public courseService: CourseService) {}

  ngOnInit() {
    this.loadCourseHistory();
  }

  loadCourseHistory(){
    this.courseService.getCourseHistory();
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-course-sidenav',
  standalone: true,
  imports: [
    MatButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './course-sidenav.component.html',
  styleUrl: './course-sidenav.component.css'
})
export class CourseSidenavComponent implements OnInit{
  selectedCourse: Course | null = null
  openedUnits: Set<number> = new Set();

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.selectedCourse = this.courseService.getSelectedCourse();
    if (this.selectedCourse) {
      console.log('Selected course:', this.selectedCourse);
    }
  }

  toggleUnit(unitId: number) {
    if (this.openedUnits.has(unitId)) {
      this.openedUnits.delete(unitId);
    } else {
      this.openedUnits.add(unitId);
    }
  }

  isUnitOpen(unitId: number): boolean {
    return this.openedUnits.has(unitId);
  }
}

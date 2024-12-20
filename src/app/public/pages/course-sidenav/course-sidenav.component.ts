import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatDialog } from "@angular/material/dialog";
import {RatingDialogComponent} from "../rating-dialog/rating-dialog.component";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";
import {Unit} from "../../../learning/model/unit.entity";
import {UnitService} from "../../../learning/services/unit.service";
import {SectionService} from "../../../learning/services/section.service";
import {Section} from "../../../learning/model/section.entity";
import {ExamService} from "../../../learning/services/exam.service";
import {Exam} from "../../../learning/model/exam.entity";

@Component({
  selector: 'app-course-sidenav',
  standalone: true,
  imports: [
    MatButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgIf,
    NgForOf,
    RouterLink,
    RouterOutlet,
    RatingDialogComponent,
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './course-sidenav.component.html',
  styleUrl: './course-sidenav.component.css'
})
export class CourseSidenavComponent implements OnInit{
  selectedCourse: Course | null = null;
  units: Array<Unit> = [];
  sections: Array<Section> = [];
  exams: Array<Exam> = [];
  openedUnits: Set<number> = new Set();

  constructor(private courseService: CourseService, private router: Router, private dialog: MatDialog,
              private unitService: UnitService, private sectionService: SectionService,
              private examService: ExamService) {
  }

  ngOnInit(): void {
    this.selectedCourse = this.courseService.getSelectedCourse();
    if (this.selectedCourse) {
      console.log('Selected course:', this.selectedCourse);
    }
    this.getAllUnits();
    this.getAllSections();
    this.getAllExams();
  }

  private getAllUnits() {
    this.unitService.getAll().subscribe((response: Array<Unit>) => {
      this.units = response.filter(unit => unit.course_id == this.selectedCourse?.id);
      console.log(this.units);
    })
  }

  private getAllSections() {
    this.sectionService.getAll().subscribe((response: Array<Section>) => {
      const unitIds = this.units.map(unit => unit.id);
      this.sections = response.filter(section => unitIds.includes(section.unit_id));
      console.log(this.sections);
    })
  }

  private getAllExams() {
    this.examService.getAll().subscribe((response: Array<Exam>) => {
      const unitIds = this.units.map(unit => unit.id);
      this.exams = response.filter(exam => unitIds.includes(exam.unit_id));
      console.log(this.exams);
    })
  }

  openRatingDialog(): void {
    const dialogRef = this.dialog.open(RatingDialogComponent);

    dialogRef.afterClosed().subscribe(rating => {
      if (rating) {
        console.log('Calificación recibida: ', rating);
      }
    });
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

  navigateToVideo(sectionId: number) {
    this.router.navigate(['/courseSidenav/courseVideo'], { queryParams: { id: sectionId } });
  }

  navigateToExam(examId: number) {
    this.router.navigate(['/courseSidenav/exam'], { queryParams: { id: examId } });
  }

  navigateToTutoring() {
    if (this.selectedCourse) {
      this.router.navigate(['/courseSidenav/tutoring'], { queryParams: { id: this.selectedCourse.id } });
    } else {
      console.error('No selected course');
    }
  }

  navigateToMaterial() {
    if (this.selectedCourse) {
      this.router.navigate(['/courseSidenav/material'], {queryParams: {id: this.selectedCourse.id}});
    }
  }
}

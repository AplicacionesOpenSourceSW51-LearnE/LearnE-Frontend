import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {Course} from "../../../learning/model/course.entity";
import {Unit} from "../../../learning/model/unit.entity";
import {Section} from "../../../learning/model/section.entity";
import {Exam} from "../../../learning/model/exam.entity";
import {CourseService} from "../../../learning/services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {UnitService} from "../../../learning/services/unit.service";
import {SectionService} from "../../../learning/services/section.service";
import {ExamService} from "../../../learning/services/exam.service";
import {RatingDialogComponent} from "../rating-dialog/rating-dialog.component";
import {MatIcon} from "@angular/material/icon";
import {DialogAddComponent} from "../dialog-add/dialog-add.component";

@Component({
  selector: 'app-course-edit-content',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgForOf,
    NgIf,
    RouterLink,
    RouterOutlet,
    TranslateModule,
    MatIcon
  ],
  templateUrl: './course-edit-content.component.html',
  styleUrl: './course-edit-content.component.css'
})
export class CourseEditContentComponent {
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
    this.router.navigate(['/courseEditContent/sectionEdit'], { queryParams: { id: sectionId } });
  }

  navigateToExam(examId: number) {
    this.router.navigate(['/courseEditContent/examEdit'], { queryParams: { id: examId } });
  }

  addUnit() {
    this.router.navigate(['/mainPage/unitAdd']);
  }

  openAddDialog(unitId: number) {
    const dialogRef = this.dialog.open(DialogAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'exam') {
        this.router.navigate(['/mainPage/examAdd'], { queryParams: { id: unitId } });
      } else if (result === 'section') {
        this.router.navigate(['/mainPage/sectionAdd'], { queryParams: { id: unitId } });
      }
    });
  }
}

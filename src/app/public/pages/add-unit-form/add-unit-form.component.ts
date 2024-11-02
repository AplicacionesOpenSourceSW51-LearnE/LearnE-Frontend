import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Unit} from "../../../learning/model/unit.entity";
import {Course} from "../../../learning/model/course.entity";
import {CourseService} from "../../../learning/services/course.service";
import {Router} from "@angular/router";
import {MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {UnitService} from "../../../learning/services/unit.service";

@Component({
  selector: 'app-add-unit-form',
  standalone: true,
  imports: [
    TranslateModule,
    MatLabel,
    FormsModule,
    MatInput
  ],
  templateUrl: './add-unit-form.component.html',
  styleUrl: './add-unit-form.component.css'
})
export class AddUnitFormComponent {
  @Input() unit!: Unit;
  @Output() protected unitAdded= new EventEmitter<Unit>();
  selectedCourse: Course | null = null;

  constructor(private courseService: CourseService, private router: Router, private unitService: UnitService) {
  }

  ngOnInit() {
    this.selectedCourse = this.courseService.getSelectedCourse();
    console.log(this.selectedCourse);
    this.unit = new Unit({course_id: this.selectedCourse?.id});
  }

  protected async createNewUnit() {
    this.unitService.create(this.unit).subscribe();
    this.router.navigate(['/courseEditContent']);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Material} from "../../../learning/model/material.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialsService} from "../../../learning/services/materials.service";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {FormsModule} from "@angular/forms";
import {MatInput, MatLabel} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-add-materials',
  standalone: true,
  imports: [
    FormsModule,
    MatInput,
    MatLabel,
    TranslateModule
  ],
  templateUrl: './add-materials.component.html',
  styleUrl: './add-materials.component.css'
})
export class AddMaterialsComponent {
  @Input() material = new Material({});
  @Output() protected addSection = new EventEmitter<Material>();
  selectedCourse: Course | null = null;

  constructor(private materialService: MaterialsService, private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.selectedCourse = this.courseService.getSelectedCourse();
    this.material = new Material({course_id: this.selectedCourse?.id})
  }

  protected async addNewMaterial() {
    this.materialService.create(this.material).subscribe();
    this.router.navigate(['/courseEditContent']);
  }

  cancelMaterial() {
    this.router.navigate(['/courseEditContent']);
  }
}

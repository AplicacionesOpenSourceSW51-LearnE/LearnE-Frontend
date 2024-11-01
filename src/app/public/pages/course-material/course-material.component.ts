import { Component } from '@angular/core';
import {Material} from "../../../learning/model/material.entity";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MaterialsService} from "../../../learning/services/materials.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatAnchor, MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-course-material',
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    MatCardContent,
    MatCardSubtitle,
    MatButton,
    TranslateModule,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './course-material.component.html',
  styleUrl: './course-material.component.css'
})
export class CourseMaterialComponent {
  courseId: number | null = null;
  materials: Array<Material> = [];
  studentType = Number(sessionStorage.getItem('type_plan'));

  constructor(private route: ActivatedRoute, private materialService: MaterialsService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id'] ? Number(params['id']) : null;
      if (this.courseId) {
        this.loadMaterial();
      }
    })
  }

  loadMaterial() {
    if (this.courseId) {
      this.materialService.getAll().subscribe((response: Array<Material>) => {
        this.materials = response.filter(mat => mat.course_id === this.courseId)
      })
    }
  }

  enterLink(materialId: number) {
    const material = this.materials.find(mat => mat.id === materialId);
    if (material && material.link != '') {
      window.open(material.link, '_blank');
    } else {
      console.warn('Material invalid link');
    }
  }
}

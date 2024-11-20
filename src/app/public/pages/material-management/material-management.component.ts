import { Component } from '@angular/core';
import {Material} from "../../../learning/model/material.entity";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MaterialsService} from "../../../learning/services/materials.service";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-material-management',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    NgIf,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './material-management.component.html',
  styleUrl: './material-management.component.css'
})
export class MaterialManagementComponent {
  courseId: number | null = null;
  materials: Array<Material> = [];

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

  deleteMaterial(materialId: number) {
    const material = this.materials.find(mat => mat.id === materialId);
    this.materialService.delete(material?.id).subscribe({
      next: (response) => {
        alert("Material deleted successfully.");
      },
      error: (err) => {
        alert("Error deleting material.");
        console.error(err);
      }
    });
  }
}

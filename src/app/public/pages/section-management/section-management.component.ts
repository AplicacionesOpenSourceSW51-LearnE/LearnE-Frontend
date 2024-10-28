import { Component } from '@angular/core';
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-section-management',
  standalone: true,
  imports: [
    MatLabel,
  ],
  templateUrl: './section-management.component.html',
  styleUrl: './section-management.component.css'
})
export class SectionManagementComponent {
}

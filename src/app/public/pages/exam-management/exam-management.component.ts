import { Component } from '@angular/core';
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-exam-management',
  standalone: true,
    imports: [
        MatLabel
    ],
  templateUrl: './exam-management.component.html',
  styleUrl: './exam-management.component.css'
})
export class ExamManagementComponent {

}

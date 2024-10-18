import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-course-registration',
  standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatIcon,
        MatCardContent,
        MatCardActions,
        MatCardTitle,
        MatCardSubtitle,
        MatButton,
        TranslateModule
    ],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent {

}

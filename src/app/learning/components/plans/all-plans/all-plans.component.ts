import { Component } from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";

@Component({
  selector: 'app-all-plans',
  standalone: true,
    imports: [
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './all-plans.component.html',
  styleUrl: './all-plans.component.css'
})
export class AllPlansComponent {

}

import { Component } from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MainPageComponent} from "../main-page/main-page.component";
import {Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-all-plans',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MainPageComponent,
    TranslateModule
  ],
  templateUrl: './all-plans.component.html',
  styleUrl: './all-plans.component.css'
})
export class AllPlansComponent {
  constructor(private router: Router) {}  // Inyectas el servicio Router aquí

  goToCardPayment(): void {
    this.router.navigate(['/mainPage/cardPayment']);
  }
}

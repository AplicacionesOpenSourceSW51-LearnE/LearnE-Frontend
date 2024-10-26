import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-payment-succesful',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatButton,
    NgOptimizedImage,
    TranslateModule,
    MatIcon,
    MatIconModule
  ],
  templateUrl: './payment-succesful.component.html',
  styleUrl: './payment-succesful.component.css'
})
export class PaymentSuccesfulComponent {

  constructor(private router: Router) {}

  goTopPlans(): void {
    this.router.navigate(['/mainPage/plans']);
  }
}

import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-payment-succesful',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatButton
  ],
  templateUrl: './payment-succesful.component.html',
  styleUrl: './payment-succesful.component.css'
})
export class PaymentSuccesfulComponent {

}

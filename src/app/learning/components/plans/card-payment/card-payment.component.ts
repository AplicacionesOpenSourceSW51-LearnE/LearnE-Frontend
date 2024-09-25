import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card-payment',
  standalone: true,
  imports: [
    MatAnchor,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    MatButton
  ],
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent {

}

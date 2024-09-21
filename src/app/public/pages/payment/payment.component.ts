import { Component } from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}

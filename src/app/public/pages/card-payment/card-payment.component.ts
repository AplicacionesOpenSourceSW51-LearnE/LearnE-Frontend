import {Component, EventEmitter, Output} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogRef} from "@angular/material/dialog";

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
    MatButton,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent {
  @Output() cancel = new EventEmitter<void>();

  constructor(private router: Router, public dialog: MatDialogRef<CardPaymentComponent>) {}

  goTopPaymentSuccesful(): void {
    this.router.navigate(['/mainPage/paymentSuccesful']);
  }

  cancelPayment() {
    this.cancel.emit();
  }
}

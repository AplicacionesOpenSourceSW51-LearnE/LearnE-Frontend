import {Component, EventEmitter, Output, Input} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogRef} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {PaymentService} from "../../../learning/services/payment.service";
import {Payment} from "../../../learning/model/payment.entity";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {switchMap} from "rxjs";

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
    TranslateModule,
    FormsModule
  ],
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent {
  nameCard: string = "";
  numberCard: string = "";
  expireDate: string = "";
  securityCode: string = "";
  email: string = "";
  payment: Payment = new Payment({});
  user: User = new User({});

  constructor(private router: Router, public dialog: MatDialogRef<CardPaymentComponent>,
              private paymentApiService: PaymentService, private userApiService: UserService){}

  goTopPaymentSuccesful(): void {
    this.router.navigate(['/mainPage/paymentSuccesful']);
  }

  public cancelPayment() {
    this.nameCard = "";
    this.numberCard = "";
    this.expireDate = "";
    this.securityCode = "";
    this.email = "";
    this.dialog.close();
  }

  public pay() {
    this.validateData();
    this.createPayment();
    sessionStorage.setItem('type_plan', String(1));
    this.dialog.close();
    this.goTopPaymentSuccesful();
  }

  private validateData() {
    if(this.nameCard === "" || this.numberCard === "" || this.expireDate === "" || this.securityCode === ""
    || this.email === "") {
      alert('All the fields are required.')
    }
  }

  private createPayment() {
    this.payment.name_card = this.nameCard;
    this.payment.number_card = this.numberCard;
    this.payment.expire_date = this.expireDate;
    this.payment.security_code = this.securityCode;
    this.payment.email = this.email;
    this.payment.student_id = Number(sessionStorage.getItem('id'));

    this.paymentApiService.create(this.payment).subscribe((response: Payment) => {
      this.payment = response;
      console.log(this.payment);
    })

    this.getUserAndUpdate();
  }

  private getUserAndUpdate() {
    this.userApiService.getById(Number(sessionStorage.getItem('id')))
      .pipe(
        switchMap((response: User) => {
          this.user = response;
          console.log(this.user);

          this.user.type_plan = 1;

          return this.userApiService.update(Number(sessionStorage.getItem('id')), this.user);
        })
      )
      .subscribe({
        next: () => console.log('User updated successfully'),
        error: (err) => console.error('Error updating user:', err)
      });
  }
}

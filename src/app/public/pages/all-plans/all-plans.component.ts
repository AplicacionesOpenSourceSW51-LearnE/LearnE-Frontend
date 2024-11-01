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
import {MatDialog} from "@angular/material/dialog";
import {CardPaymentComponent} from "../card-payment/card-payment.component";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {NgIf} from "@angular/common";
import {ConfirmCancelDialogComponent} from "../confirm-cancel-dialog/confirm-cancel-dialog.component";

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
    TranslateModule,
    NgIf
  ],
  templateUrl: './all-plans.component.html',
  styleUrl: './all-plans.component.css'
})
export class AllPlansComponent {
  user: User = new User({});
  typePlan: number = Number(sessionStorage.getItem('type_plan'));

  constructor(private router: Router, public dialog: MatDialog, private userApiService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  goToCardPayment(): void {
    this.router.navigate(['/mainPage/cardPayment']);
  }

  openCardPayment(): void {
    this.dialog.open(CardPaymentComponent, {
    });
  }

  openConfirmCancelDialog(): void {
    const dialogRef = this.dialog.open(ConfirmCancelDialogComponent);

    const componentInstance = dialogRef.componentInstance;
    componentInstance.updatedPlanAction.subscribe(() => {
      console.log('Updated plan, reloading page');
      this.reloadPage();
    });
  }

  private getUser() {
    this.userApiService.getById(Number(sessionStorage.getItem('id'))).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    })
  }

  private reloadPage() {
    window.location.reload();
  }

}

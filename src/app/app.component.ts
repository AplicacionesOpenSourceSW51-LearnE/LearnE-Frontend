import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {NgOptimizedImage} from "@angular/common";
import {MainToolbarComponent} from "./public/components/main-toolbar/main-toolbar.component";
import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
import {AllPlansComponent} from "./public/pages/all-plans/all-plans.component";
import {CardPaymentComponent} from "./public/pages/card-payment/card-payment.component";
import {PaymentSuccesfulComponent} from "./public/pages/payment-succesful/payment-succesful.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, LandingPageComponent, NgOptimizedImage, MainToolbarComponent, SuscriptionsComponent, AllPlansComponent, CardPaymentComponent, PaymentSuccesfulComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendLearnE';

}

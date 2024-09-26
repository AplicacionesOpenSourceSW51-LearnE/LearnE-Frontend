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
import {ExamComponent} from "./public/pages/exam/exam.component";
import {MainPageComponent} from "./public/pages/main-page/main-page.component";
import {CourseRegistrationComponent} from "./public/pages/course-registration/course-registration.component";
import {CourseVideoComponent} from "./public/pages/course-video/course-video.component";
import {CourseSidenavComponent} from "./public/pages/course-sidenav/course-sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, LandingPageComponent, NgOptimizedImage, MainToolbarComponent, SuscriptionsComponent, AllPlansComponent, CardPaymentComponent, PaymentSuccesfulComponent, ExamComponent, MainPageComponent, CourseRegistrationComponent, CourseVideoComponent, CourseSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendLearnE';

}

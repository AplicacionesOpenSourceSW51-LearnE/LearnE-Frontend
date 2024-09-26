import { Routes } from '@angular/router';
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
import {PaymentComponent} from "./public/pages/payment/payment.component";
import {MainPageComponent} from "./public/pages/main-page/main-page.component";
import {RegisterConfirmationComponent} from "./public/pages/register-confirmation/register-confirmation.component";
import {AllPlansComponent} from "./public/pages/all-plans/all-plans.component";
import {CardPaymentComponent} from "./public/pages/card-payment/card-payment.component";
import {PaymentSuccesfulComponent} from "./public/pages/payment-succesful/payment-succesful.component";
import {MyCoursesComponent} from "./public/pages/my-courses/my-courses.component";
import {CourseSidenavComponent} from "./public/pages/course-sidenav/course-sidenav.component";
import {CourseVideoComponent} from "./public/pages/course-video/course-video.component";

export const routes: Routes = [
  { path: 'home',                component: LandingPageComponent},
  { path: 'home/signIn',         component: SignInComponent},
  { path: 'home/register',       component: RegisterComponent},
  { path: 'home/subscriptions',  component: SuscriptionsComponent},
  { path: 'home/payment',        component: PaymentComponent},
  { path: 'home/payment/success',component: RegisterConfirmationComponent},
  { path: 'mainPage',            component: MainPageComponent, children: [
      { path: 'allPlans', component:AllPlansComponent},
      { path: 'cardPayment', component: CardPaymentComponent},
      { path: 'paymentSuccesful', component: PaymentSuccesfulComponent},
      { path: 'myCourses', component: MyCoursesComponent},
    ]},
  { path: 'courseSidenav', component: CourseSidenavComponent, children: [
      { path: 'courseVideo', component: CourseVideoComponent },
    ]},
  { path: '',                    redirectTo: 'home', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }
];

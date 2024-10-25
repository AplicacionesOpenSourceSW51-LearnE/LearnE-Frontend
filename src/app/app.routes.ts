  import { Routes } from '@angular/router';
  import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
  import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
  import {RegisterComponent} from "./public/pages/register/register.component";
  import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
  import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
  import {PaymentComponent} from "./public/pages/payment/payment.component";
  import {MainPageComponent} from "./public/pages/main-page/main-page.component";
  import {RegisterConfirmationComponent} from "./public/pages/register-confirmation/register-confirmation.component";
  import {CalendarComponent} from "./public/pages/calendar/calendar.component";
  import {CourseSessionComponent} from "./public/pages/course-session/course-session.component";
  import {CourseDetailsComponent} from "./public/pages/course-details/course-details.component";
  import {RatingDialogComponent} from "./public/pages/rating-dialog/rating-dialog.component";
  import {DescriptionComponent} from "./public/pages/description/description.component";

  export const routes: Routes = [
    { path: 'home',                component: LandingPageComponent},
    { path: 'home/signIn',         component: SignInComponent},
    { path: 'home/register',       component: RegisterComponent},
    { path: 'home/subscriptions',  component: SuscriptionsComponent},
    { path: 'home/payment',        component: PaymentComponent},
    { path: 'home/payment/success',component: RegisterConfirmationComponent},
    { path: 'calendar',            component: CalendarComponent},
    {path: 'course-session',       component: CourseSessionComponent},
    {path: 'course-details',       component: CourseDetailsComponent},
    {path:'rating-dialog',         component: RatingDialogComponent},
    { path:'description',          component: DescriptionComponent}, // Aquí está la corrección
    { path: 'mainPage',            component: MainPageComponent},
    { path: '',                    redirectTo: 'home', pathMatch: 'full' },
    { path: '**',                  component: PageNotFoundComponent }
  ];

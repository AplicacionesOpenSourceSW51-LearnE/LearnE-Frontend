import { Routes } from '@angular/router';
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
import {PaymentComponent} from "./public/pages/payment/payment.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";
import {MyNotesComponent} from "./public/pages/my-notes/my-notes.component";
import {CourseHistoryComponent} from "./public/pages/course-history/course-history.component";

export const routes: Routes = [
  { path: 'home',           component: LandingPageComponent},
  { path: 'signIn',         component: SignInComponent},
  { path: 'register',       component: RegisterComponent},
  { path: 'subscriptions',  component: SuscriptionsComponent},
  { path: 'courseHistory',  component: CourseHistoryComponent},
  { path: 'payment',        component: PaymentComponent},
  { path: 'myNotes',        component: MyNotesComponent},
  { path: 'profile',        component: ProfileComponent},
  { path: '',               redirectTo: 'home', pathMatch: 'full' },
  { path: '**',             component: PageNotFoundComponent }
];

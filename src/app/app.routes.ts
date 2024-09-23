import { Routes } from '@angular/router';
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
import {PaymentComponent} from "./public/pages/payment/payment.component";

export const routes: Routes = [
  { path: 'home',           component: LandingPageComponent},
  { path: 'signIn',         component: SignInComponent},
  { path: 'register',       component: RegisterComponent},
  { path: 'subscriptions',  component: SuscriptionsComponent},
  { path: 'payment',        component: PaymentComponent},
  { path: '',               redirectTo: 'home', pathMatch: 'full' },
  { path: '**',             component: PageNotFoundComponent }
];

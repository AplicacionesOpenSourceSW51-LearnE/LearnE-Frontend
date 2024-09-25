import { Routes } from '@angular/router';
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SuscriptionsComponent} from "./public/pages/subscriptions/suscriptions.component";
import {PaymentComponent} from "./public/pages/payment/payment.component";
import {MainPageComponent} from "./public/pages/main-page/main-page.component";
import {RegisterConfirmationComponent} from "./public/pages/register-confirmation/register-confirmation.component";

export const routes: Routes = [
  { path: 'home',                component: LandingPageComponent},
  { path: 'home/signIn',         component: SignInComponent},
  { path: 'home/register',       component: RegisterComponent},
  { path: 'home/subscriptions',  component: SuscriptionsComponent},
  { path: 'home/payment',        component: PaymentComponent},
  { path: 'home/payment/success',component: RegisterConfirmationComponent},
  { path: 'mainPage',            component: MainPageComponent},
  { path: '',                    redirectTo: 'home', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }
];

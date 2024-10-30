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
import {PaymentSuccesfulComponent} from "./public/pages/payment-succesful/payment-succesful.component";
import {MyCoursesComponent} from "./public/pages/my-courses/my-courses.component";
import {CourseSidenavComponent} from "./public/pages/course-sidenav/course-sidenav.component";
import {CourseVideoComponent} from "./public/pages/course-video/course-video.component";
import {CalendarComponent} from "./public/pages/calendar/calendar.component";
import {ExamComponent} from "./public/pages/exam/exam.component";
import {CourseDetailsComponent} from "./public/pages/course-details/course-details.component";
import {MyNotesComponent} from "./public/pages/my-notes/my-notes.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";
import {CourseTutoringComponent} from "./public/pages/course-tutoring/course-tutoring.component";


export const routes: Routes = [
  { path: 'home',                component: LandingPageComponent},
  { path: 'home/signIn',         component: SignInComponent},
  { path: 'home/register',       component: RegisterComponent},
  { path: 'home/subscriptions',  component: SuscriptionsComponent},
  { path: 'home/payment',        component: PaymentComponent},
  { path: 'home/payment/success',component: RegisterConfirmationComponent},
  { path: 'mainPage',            component: MainPageComponent, children: [
      { path: 'plans', component:AllPlansComponent},
      { path: 'paymentSuccesful', component: PaymentSuccesfulComponent},
      { path: 'myCourses', component: MyCoursesComponent},
      { path: 'calendar',component: CalendarComponent},
      { path: 'myNotes', component: MyNotesComponent},
      { path: 'profile', component: ProfileComponent}
    ]},
  { path: 'courseSidenav', component: CourseSidenavComponent, children: [
      { path: 'courseVideo', component: CourseVideoComponent },
      { path: 'exam', component: ExamComponent},
      { path: 'course-details', component: CourseDetailsComponent},
      { path: 'tutoring', component: CourseTutoringComponent },
    ]},
  { path: '',                    redirectTo: 'home', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }
];

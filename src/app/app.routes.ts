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
import {CourseMaterialComponent} from "./public/pages/course-material/course-material.component";
import {MainToolbarComponent} from "./public/components/main-toolbar/main-toolbar.component";
import {GradesComponent} from "./public/pages/grades/grades.component";
import {CatalogCoursesComponent} from "./public/pages/catalog-courses/catalog-courses.component";
import {ManagementComponent} from "./public/pages/management/management.component";
import {CourseManagementComponent} from "./public/pages/course-management/course-management.component";
import {CourseEditContentComponent} from "./public/pages/course-edit-content/course-edit-content.component";
import {CourseAddComponent} from "./public/pages/course-add/course-add.component";
import {ExamManagementComponent} from "./public/pages/exam-management/exam-management.component";
import {AddSectionFormComponent} from "./public/pages/add-section-form/add-section-form.component";
import {AddUnitFormComponent} from "./public/pages/add-unit-form/add-unit-form.component";
import {ExamEditComponent} from "./public/pages/exam-edit/exam-edit.component";
import {CourseVideoEditComponent} from "./public/pages/course-video-edit/course-video-edit.component";
import {TutoringManagementComponent} from "./public/pages/tutoring-management/tutoring-management.component";
import {AddMaterialsComponent} from "./public/pages/add-materials/add-materials.component";

export const routes: Routes = [
  { path: 'mainToolbar', component: MainToolbarComponent, children: [
      { path: 'home',                component: LandingPageComponent },
      { path: 'signIn',         component: SignInComponent},
      { path: 'register',       component: RegisterComponent}
    ]},
  { path: 'subscriptions',  component: SuscriptionsComponent},
  { path: 'payment',        component: PaymentComponent},
  { path: 'payment/success',component: RegisterConfirmationComponent},
  { path: 'mainPage',            component: MainPageComponent, children: [
      { path: 'catalog', component: CatalogCoursesComponent },
      { path: 'courseDetails', component: CourseDetailsComponent },
      { path: 'plans', component:AllPlansComponent},
      { path: 'paymentSuccesful', component: PaymentSuccesfulComponent},
      { path: 'myCourses', component: MyCoursesComponent},
      { path: 'calendar',component: CalendarComponent},
      { path: 'myNotes', component: MyNotesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'grades', component: GradesComponent},
      { path: 'management', component: ManagementComponent },
      { path: 'courseManagement', component: CourseManagementComponent },
      { path: 'courseAdd', component: CourseAddComponent },
      { path: 'unitAdd', component: AddUnitFormComponent },
      { path: 'examAdd', component: ExamManagementComponent },
      { path: 'sectionAdd', component: AddSectionFormComponent },
      { path: 'tutoringManagement', component: TutoringManagementComponent},
      { path: 'materialManagement', component: AddMaterialsComponent}
    ]},
  { path: 'courseEditContent', component: CourseEditContentComponent, children: [
      { path: 'sectionEdit', component: CourseVideoEditComponent },
      { path: 'examEdit', component: ExamEditComponent }
    ]},
  { path: 'courseSidenav', component: CourseSidenavComponent, children: [
      { path: 'courseVideo', component: CourseVideoComponent },
      { path: 'exam', component: ExamComponent},
      { path: 'course-details', component: CourseDetailsComponent},
      { path: 'tutoring', component: CourseTutoringComponent },
      { path: 'material', component: CourseMaterialComponent },
    ]},
  { path: '',                    redirectTo: 'mainToolbar/home', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }
];

import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import {NgOptimizedImage} from "@angular/common";
import {MainToolbarComponent} from "./public/components/main-toolbar/main-toolbar.component";
import {RouterLink, RouterOutlet} from '@angular/router';
import {CalendarComponent} from "./public/pages/calendar/calendar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, LandingPageComponent, NgOptimizedImage,
    MainToolbarComponent,
    MatDialogModule,
    MatIconModule,
    RouterLink,CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendLearnE';
  protected options = [
    { path: '/calendar', title: 'calendar'},


  ]
}



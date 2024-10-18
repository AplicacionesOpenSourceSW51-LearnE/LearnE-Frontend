import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatAnchor,
    RouterOutlet
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  protected readonly provideRouter = provideRouter;
  signInPath = 'signIn';
  registerPath = 'register';

}

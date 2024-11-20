import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatAnchor,
    RouterOutlet,
    TranslateModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  protected readonly provideRouter = provideRouter;
  signInPath = 'signIn';
  registerPath = 'register';

}

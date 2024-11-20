import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    LanguageSwitcherComponent
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.css'
})
export class MainToolbarComponent {
  redirectPath = "home";
}

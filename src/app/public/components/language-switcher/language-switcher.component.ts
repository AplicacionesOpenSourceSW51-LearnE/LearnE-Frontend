import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  currentLan = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLan = translate.currentLang;
  }

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }
}

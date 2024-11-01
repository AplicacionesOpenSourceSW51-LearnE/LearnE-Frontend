import { Component, inject} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatNavList,
    MatListItem,
    MatIcon,
    RouterLink,
    RouterOutlet,
    LanguageSwitcherComponent,
    TranslateModule,
    NgIf,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  type_user = 2;

  ngOnInit() {
    this.type_user = Number(sessionStorage.getItem('type_user'));
  }

  constructor(private router: Router) {
  }

  public logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('type_user');
    sessionStorage.removeItem('type_plan');
    sessionStorage.removeItem('id');
    this.router.navigate(['/mainToolbar/home']);
  }
}

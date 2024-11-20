import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-register-confirmation',
  standalone: true,
  imports: [
    MatAnchor,
    RouterLink,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './register-confirmation.component.html',
  styleUrl: './register-confirmation.component.css'
})
export class RegisterConfirmationComponent {

}

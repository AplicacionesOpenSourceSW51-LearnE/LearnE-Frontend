import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInput,
    MatLabel,
    RouterModule,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }

}

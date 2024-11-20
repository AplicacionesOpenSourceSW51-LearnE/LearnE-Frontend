import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {SignInRequest} from "../../model/sign-in.request";

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
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent{
  username: string;
  password: string;
  submitted = false;

  constructor(private authenticationService: AuthenticationService) {
    super();
    this.username = "";
    this.password = "";
  }
  validateUser() {
    if (this.username == "" || this.password == "") return;
    let username = this.username;
    let password = this.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest)
    this.submitted = true;
  }
}

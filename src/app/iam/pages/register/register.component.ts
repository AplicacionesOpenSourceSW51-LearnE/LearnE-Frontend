import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {UserType} from "../../../learning/model/user.enum";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {AuthenticationService} from "../../services/authentication.service";
import {Plan} from "../../../learning/model/plan.enum";
import {SignUpRequest} from "../../model/sign-up.request";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatRadioGroup,
    MatRadioButton

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends BaseFormComponent{
  submitted = false;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  type_user = UserType;
  type_plan: Plan;

  constructor(private authenticationService: AuthenticationService) {
    super();
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.email = "";
    this.password = "";
    this.type_plan = Plan.NOTHING;
  }

  /*protected async createNewUser(){
    this.userService.create(this.user).subscribe({
      next: (newUser: User) => {
        sessionStorage.setItem('id', String(newUser.id));
        sessionStorage.setItem('email', this.user.email);
        sessionStorage.setItem('password', this.user.password);
        sessionStorage.setItem('type_user', String(this.user.type_user));
        sessionStorage.setItem('type_plan', String(this.user.type_plan));
        this.typeUserIdentification();
      },
      error: (error) => {
        console.log('Error catching user', error);
      }
    });
  }
  private typeUserIdentification() {
    if (Number(sessionStorage.getItem('type_user')) == 1) {
      this.router.navigate(['/subscriptions']);
    } else {
      sessionStorage.setItem('type_plan', String(this.user.type_plan));
      this.router.navigate(['/mainPage/management']);
    }
  }*/
  createNewUser() {
    let username = this.username;
    let password = this.password;
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }
  protected readonly UserType = UserType;
}

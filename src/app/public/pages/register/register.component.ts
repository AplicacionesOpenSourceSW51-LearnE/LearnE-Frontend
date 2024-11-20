import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {UserType} from "../../../learning/model/user.enum";
import {TranslateModule} from "@ngx-translate/core";

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
    MatRadioButton,
    TranslateModule

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() user!: User;
  @Output() protected userAddRequested = new EventEmitter<User>();
  protected UserType = UserType;

  private userService: UserService = inject(UserService);

  constructor(private router: Router) {
    this.user = new User({});
  }

  protected async createNewUser(){
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
  }
}

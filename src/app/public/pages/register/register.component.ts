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
export class RegisterComponent {
  @Input() user!: User;
  @Output() protected userAddRequested = new EventEmitter<User>();
  protected UserType = UserType;
  users: Array<User> = [];

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

  /*protected async getIdOfUser() {
    this.userService.getAll().subscribe((response: Array<User>) => {
      this.users = response;
      console.log(this.users);
    if (this.users.length > 0) {
      const lastUser = this.users[this.users.length - 1];
      sessionStorage.setItem('id', String(lastUser.id));
      console.log(lastUser.id);
    } else {
      console.error('No users found');
    }
  }, error => {
    console.error('Error fetching users:', error);
    });
  }*/

  private typeUserIdentification() {
    if (Number(sessionStorage.getItem('type_user')) == 1) {
      this.router.navigate(['/home/subscriptions']);
    } else {
      sessionStorage.setItem('type_plan', String(this.user.type_plan));
      this.router.navigate(['/mainPage']);
    }
  }
}

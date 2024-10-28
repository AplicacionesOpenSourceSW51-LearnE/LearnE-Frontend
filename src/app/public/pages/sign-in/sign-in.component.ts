import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {UserService} from "../../../learning/services/user.service";
import {User} from "../../../learning/model/user.entity";
import {Course} from "../../../learning/model/course.entity";

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
  users: Array<User> = [];
  email: string;
  password: string;

  constructor(private userApiService: UserService, private router: Router) {
    this.email = "";
    this.password = "";

  }

  ngOnInit(){
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userApiService.getAll().subscribe((response: Array<User>) => {
      this.users = response;
      console.log(this.users);
    })
  }

  private enterUser() {
    this.router.navigate(['/mainPage']);
  }

  public validateUser() {
    let user1 = new User({});
    for (let user of this.users) {
      user1 = user;
      if (user1.email == this.email) {
        if (user1.password == this.password) {
          sessionStorage.setItem('email', this.email);
          sessionStorage.setItem('password', this.password);
          sessionStorage.setItem('type_user', String(user1.type_user));
          sessionStorage.setItem('id', String(user1.id));
          sessionStorage.setItem('type_plan', String(user1.type_plan))
          this.enterUser();
        } else {
          alert('Password or email incorrect');
        }
      }
    }
  }
}

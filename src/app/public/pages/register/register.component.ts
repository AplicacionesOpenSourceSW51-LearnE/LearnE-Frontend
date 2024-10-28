import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {UserType} from "../../../learning/model/user.enum";
import {MatOption, MatSelect} from "@angular/material/select";
import {Plans} from "../../../learning/model/plans.enum";

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
    MatSelect,
    MatOption

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() user!: User;
  @Output() protected userAddRequested = new EventEmitter<User>();
  protected UserType = UserType;
  protected PlanType = Plans;

  private userService: UserService = inject(UserService);

  constructor() {
    this.user = new User({});
  }

  protected createNewUser(){
    this.userService.create(this.user).subscribe();
  }
}

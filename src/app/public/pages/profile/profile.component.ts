import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatToolbar,
    MatInput,
    MatIconButton,
    MatIcon,
    NgIf,
    TranslateModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User = new User({});

  constructor(private userApiService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userApiService.getById(Number(sessionStorage.getItem('id'))).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    })
  }

}

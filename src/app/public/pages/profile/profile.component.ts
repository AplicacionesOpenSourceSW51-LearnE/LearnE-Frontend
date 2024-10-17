import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatToolbar,
    MatInput,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}

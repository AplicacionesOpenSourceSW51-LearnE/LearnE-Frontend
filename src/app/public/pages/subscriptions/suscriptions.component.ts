import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {Plans} from "../../../learning/model/plans.enum";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './suscriptions.component.html',
  styleUrl: './suscriptions.component.css'
})
export class SuscriptionsComponent {
  @Input() user!: User;
  @Output() protected userAddRequested = new EventEmitter<User>();
  protected readonly Plans = Plans;
  private userService: UserService = inject(UserService);

  constructor() {
    this.user = new User({});
  }

  protected updatePlan(){
  }


}

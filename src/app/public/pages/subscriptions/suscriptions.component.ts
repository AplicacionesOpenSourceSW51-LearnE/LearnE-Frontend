import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Plan} from "../../../learning/model/plan.enum";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {UserService} from "../../../learning/services/user.service";
import {User} from "../../../learning/model/user.entity";

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatButtonToggle
  ],
  templateUrl: './suscriptions.component.html',
  styleUrl: './suscriptions.component.css'
})
export class SuscriptionsComponent {

  protected Plan = Plan;

  user = new User({});

  constructor(private userApiService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userApiService.getById(Number(sessionStorage.getItem('id'))).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    })
  }

  public updatePlan(planSelected: Plan) {
    this.user.type_plan = planSelected;
    this.userApiService.update(Number(sessionStorage.getItem('id')), this.user).subscribe();
    sessionStorage.setItem('type_plan', String(this.user.type_plan));
  }
}

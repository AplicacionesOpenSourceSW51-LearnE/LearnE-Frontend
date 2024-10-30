import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../learning/model/user.entity";
import {UserService} from "../../../learning/services/user.service";
import {switchMap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-cancel-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrl: './confirm-cancel-dialog.component.css'
})
export class ConfirmCancelDialogComponent {
  user: User = new User({});
  @Output() updatedPlanAction = new EventEmitter();

  constructor(public dialog: MatDialogRef<ConfirmCancelDialogComponent>,
              private userApiService: UserService, private router: Router) {}

  public confirmCancel(): void {
    sessionStorage.setItem('type_plan', String(0));
    this.getUserAndUpdate();
    this.updatedPlanAction.emit(true);
    this.closeDialog();
  }

  public closeDialog(): void {
    this.dialog.close();
  }

  private getUserAndUpdate() {
    this.userApiService.getById(Number(sessionStorage.getItem('id')))
      .pipe(
        switchMap((response: User) => {
          this.user = response;
          console.log(this.user);

          this.user.type_plan = 0;

          return this.userApiService.update(Number(sessionStorage.getItem('id')), this.user);
        })
      )
      .subscribe({
        next: () => console.log('User updated successfully'),
        error: (err) => console.error('Error updating user:', err)
      });
  }
}

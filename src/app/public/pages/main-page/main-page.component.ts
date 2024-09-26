import { Component, Inject } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatListItem, MatListModule, MatNavList } from "@angular/material/list";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatNavList,
    MatListItem,
    Inject,
    MatIcon,
    MatIconModule,
    RouterOutlet,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

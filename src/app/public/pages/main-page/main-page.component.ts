import { Component, inject} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatNavList,
    MatListItem,
    MatIcon,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

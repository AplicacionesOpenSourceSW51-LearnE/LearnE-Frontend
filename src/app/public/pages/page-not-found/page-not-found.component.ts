import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        MatAnchor,
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}

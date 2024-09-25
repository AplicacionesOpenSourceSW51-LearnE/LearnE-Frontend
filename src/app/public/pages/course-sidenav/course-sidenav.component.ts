import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-course-sidenav',
  standalone: true,
    imports: [
        MatButton,
        MatListItem,
        MatNavList,
        MatSidenav,
        MatSidenavContainer,
        NgIf
    ],
  templateUrl: './course-sidenav.component.html',
  styleUrl: './course-sidenav.component.css'
})
export class CourseSidenavComponent {
  private openedUnits: Set<string> = new Set();

  toggleUnit(unit: string) {
    if (this.openedUnits.has(unit)) {
      this.openedUnits.delete(unit);
    } else {
      this.openedUnits.add(unit);
    }
  }

  isUnitOpen(unit: string): boolean {
    return this.openedUnits.has(unit);
  }
}

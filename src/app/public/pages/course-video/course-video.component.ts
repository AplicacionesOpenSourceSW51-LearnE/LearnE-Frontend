import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import {NgForOf, NgIf} from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../../learning/services/course.service";
import { MatFormField, MatHint, MatLabel, MatSuffix } from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatInput } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import {MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-course-video',
  standalone: true,
  imports: [
    MatSidenavContent,
    MatTabGroup,
    MatTab,
    NgIf,
    MatSidenavContainer,
    MatHint,
    MatLabel,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatDatepicker,
    MatSuffix,
    MatDatepickerInput,
    MatInput,
    MatFormField,
    MatNativeDateModule,
    NgForOf,
    MatListItem,
    MatButton,
    TranslateModule
  ],
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent {
  sectionId: number | null = null;
  videoUrl: SafeResourceUrl = '';
  isLocalVideo: boolean = false;
  section: any;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('queryParams: ', params);
      const id = params['id'];
      this.sectionId = id ? Number(id) : null;
      console.log('sectionId: ', this.sectionId);
    });
    if (this.sectionId) {
      this.loadVideo();
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideo() {
    this.section = this.courseService.getSectionById(this.sectionId || 0);
    if (this.section && this.section.link) {
      this.videoUrl = this.sanitizeUrl(this.section.link);
      this.isLocalVideo = this.section.link.endsWith('.mp4');
    } else {
      console.error('No se encontró la sección o el enlace es inválido');
    }
  }
}

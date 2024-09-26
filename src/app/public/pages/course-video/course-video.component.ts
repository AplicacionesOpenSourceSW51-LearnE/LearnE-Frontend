import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../learning/services/course.service";

@Component({
  selector: 'app-course-video',
  standalone: true,
  imports: [
    MatSidenavContent,
    MatTabGroup,
    MatTab,
    NgIf,
    MatSidenavContainer
  ],
  templateUrl: './course-video.component.html',
  styleUrl: './course-video.component.css'
})
export class CourseVideoComponent {
  sectionId: number | null = null;
  videoUrl: SafeResourceUrl = '';
  isLocalVideo: boolean = false;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('queryParams: ', params);
      const id = params['id'];
      this.sectionId = id ? Number(id): null;
      console.log('sectionId: ', this.sectionId);
    })
    if (this.sectionId) {
      this.loadVideo();
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideo() {
    const section = this.courseService.getSectionById(this.sectionId || 0);
    if (section && section.link) {
      this.videoUrl = this.sanitizeUrl(section.link);
      this.isLocalVideo = section.link.endsWith('.mp4');
    } else {
      console.error('No se encontró la sección o el enlace es inválido');
    }
  }


}

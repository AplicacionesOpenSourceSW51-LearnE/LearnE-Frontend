import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgIf} from "@angular/common";

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
  videoUrl: string = '';
  isLocalVideo: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadVideo();
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideo() {
    this.videoUrl = 'https://www.youtube.com/embed/_6N18g3ewnw';
    this.isLocalVideo = this.videoUrl.endsWith('.mp4');
  }
}

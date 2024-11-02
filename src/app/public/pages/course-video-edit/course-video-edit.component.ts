import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {SectionService} from "../../../learning/services/section.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-course-video-edit',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    NgIf,
    TranslateModule,
    MatButton
  ],
  templateUrl: './course-video-edit.component.html',
  styleUrl: './course-video-edit.component.css'
})
export class CourseVideoEditComponent {
  sectionId: number | null = null;
  videoUrl: SafeResourceUrl = '';
  isLocalVideo: boolean = false;
  section: any;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute,
              private sectionService: SectionService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sectionId = params['id'] ? Number(params['id']) : null;
      if (this.sectionId) {
        this.loadVideo();
      }
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideo() {
    if (this.sectionId) {
      this.sectionService.getById(this.sectionId).subscribe(section => {
        this.section = section;
        if (this.section && this.section.url_video) {
          this.videoUrl = this.sanitizeUrl(this.section.url_video);
          this.isLocalVideo = this.section.url_video.endsWith('.mp4');
        } else {
          console.error('Enlace inválido');
        }
      })
    }
  }
}

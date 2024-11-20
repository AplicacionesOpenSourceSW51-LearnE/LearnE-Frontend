import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatLabel} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {CourseService} from "../../../learning/services/course.service";
import {Course} from "../../../learning/model/course.entity";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [
    MatLabel,
    TranslateModule,
    FormsModule,
    MatInput
  ],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent {
  @Input() course!: Course;
  @Output() protected courseAddRequested = new EventEmitter<Course>();
  teacherId = Number(sessionStorage.getItem('id'));

  constructor(private courseService: CourseService, private router: Router) {
    this.course = new Course({teacher_id: this.teacherId});
  }

  formatEmbedUrl(url: string): string {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.*[?&]v=))([^?&"'>]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  }

  protected async createNewCourse() {
    if (this.course.url_video) {
      this.course.url_video = this.formatEmbedUrl(this.course.url_video);
    }
    this.courseService.create(this.course).subscribe();
    this.router.navigate(['/mainPage/management']);
  }

  cancelCourse() {
    this.router.navigate(['/mainPage/management']);
  }
}

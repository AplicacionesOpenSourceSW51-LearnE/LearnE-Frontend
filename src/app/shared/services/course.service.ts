import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'api/courses';
  courseHistory: any[] = [];

  constructor(private http: HttpClient) {}

  getCourseHistory(): void {
    this.http.get<any[]>(`${this.apiUrl}/history`)
      .subscribe(
        (data) => {
          this.courseHistory = data;
        },
        (error) => {
          console.error('Error the courses history', error);
        }
      );
  }
}

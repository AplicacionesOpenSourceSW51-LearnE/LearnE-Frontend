import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Student} from "../../../learning/model/student.entity";
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../../learning/services/student.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() student!: Student;
  @Output() protected studentAddRequested = new EventEmitter<Student>();

  private studentService: StudentService = inject(StudentService);
  constructor() {
    this.student = new Student({});
  }

  protected createStudent(){
    this.studentService.create(this.student).subscribe();
  }
}

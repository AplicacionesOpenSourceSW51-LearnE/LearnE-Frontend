export class Teacher {
  name: string;
  lastname: string;
  speciality: string;
  image: string;

  constructor(teacher: {name?: string, lastname?: string, speciality?: string, image?:string}) {
    this.name = teacher.name || "";
    this.lastname = teacher.lastname || "";
    this.speciality = teacher.speciality || "";
    this.image = teacher.image || "";
  }
}

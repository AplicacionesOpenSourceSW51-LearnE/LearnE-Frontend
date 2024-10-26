export class Student {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  constructor(student: {id?: number, firstName?: string, lastName?: string, username?: string, email?: string, password?: string }) {
    this.id = student.id || 0;
    this.firstName = student.firstName || '';
    this.lastName = student.lastName || '';
    this.username = student.username || '';
    this.email = student.email || '';
    this.password = student.password || '';
  }
}

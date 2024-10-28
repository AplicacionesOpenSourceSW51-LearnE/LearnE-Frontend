import {UserType} from "./user.enum";
import {Plans} from "./plans.enum";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  type: UserType;
  plan: Plans;

  constructor(user: {id?: number, firstName?: string, lastName?: string, username?: string, email?: string, password?: string, type?: UserType, plan?: Plans }) {
    this.id = user.id || 0;
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.username = user.username || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.type = user.type || UserType.STUDENT;
    this.plan = user.plan || Plans.FREE;
  }
}


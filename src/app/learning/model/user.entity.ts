import {UserType} from "./user.enum";
import {Plan} from "./plan.enum";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  type_user: UserType;
  type_plan: Plan;

  constructor(user: {id?: number, firstName?: string, lastName?: string, username?: string, email?: string, password?: string, type_user?: UserType, type_plan?: Plan }) {
    this.id = user.id || 0;
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.username = user.username || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.type_user = user.type_user || UserType.TEACHER;
    this.type_plan = user.type_plan || Plan.NOTHING;
  }
}


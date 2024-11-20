import {UserType} from "../../learning/model/user.enum";
import {Plan} from "../../learning/model/plan.enum";

export class SignUpResponse {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public password: string;
  public type_user: UserType;
  public type_plan: Plan;

  constructor(id: number, firstName: string, lastName: string, username: string, email: string, password: string,
              type_user: UserType, type_plan: Plan ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.type_user = type_user;
    this.type_plan = type_plan;
  }
}

import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/user.entity";
import {Payment} from "../model/payment.entity";

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService<Payment>{
  constructor() {
    super();
    this.resourceEndPoint='/payments';
  }
}

export class Payment {
  id: number;
  name_card: string;
  number_card: string;
  expire_date: string;
  security_code: string;
  email: string;
  student_id: number;

  constructor(payment: {id?:number, name_card?:string, number_card?:string, expire_date?: string,
    security_code?: string, email?: string, student_id?: number}) {
    this.id = payment.id || 0;
    this.name_card = payment.name_card || '';
    this.number_card = payment.number_card || '';
    this.expire_date = payment.expire_date || '';
    this.security_code = payment.security_code || '';
    this.email = payment.email || '';
    this.student_id = payment.student_id || 0;
  }
}

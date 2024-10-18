export class Payment {
  ownerName: string;
  cardNumber: number;
  expDate: string;
  secCode: string;
  email: string;

  constructor() {
    this.ownerName = "";
    this.cardNumber = 0;
    this.expDate = "";
    this.secCode = "";
    this.email = ""
  }
}

export class Hour {
  hour: string;

  constructor(hour: {hour?: string}) {
    this.hour = hour.hour || "";
  }
}

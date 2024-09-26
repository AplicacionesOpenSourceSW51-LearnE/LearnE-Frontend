import {Hour} from "./hour.entity";

export class Tutorial {
  date: string;
  hour: Array<Hour>;

  constructor(tutorial: {date?: string, hour?: Array<Hour>}) {
    this.date = tutorial.date || "";
    this.hour = tutorial.hour || [];
  }
}

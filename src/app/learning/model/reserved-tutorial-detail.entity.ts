export class ReservedTutorialDetail {
  date: string;
  hour: string;
  studentFullName: string;
  link: string;
  tutorialId: number;

  constructor(reservedTutorialDetail: {date?: string, hour?: string, studentFullName?: string, link?: string, tutorialId?: number}) {
    this.date = reservedTutorialDetail.date || "";
    this.hour = reservedTutorialDetail.hour || "";
    this.studentFullName = reservedTutorialDetail.studentFullName || "";
    this.link = reservedTutorialDetail.link || "";
    this.tutorialId = reservedTutorialDetail.tutorialId || -1;
  }
}

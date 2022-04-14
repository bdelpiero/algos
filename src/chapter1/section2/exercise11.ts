export interface ISmartDate {
  //constructor(date: string): Date;
  getMonth(): number;
  getDay(): number;
  getYear(): number;
}

export class SmartDate implements ISmartDate {
  private static readonly daysInMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  private month: number;
  private day: number;
  private year: number;

  constructor(m: number, d: number, y: number) {
    if (m > 12) throw new Error("invalid month");
    if (!this.isValidDate(m, d, y)) throw new Error("invalid day");
    this.month = m;
    this.day = d;
    this.year = y;
  }

  public getMonth(): number {
    return this.month;
  }
  public getDay(): number {
    return this.day;
  }
  public getYear(): number {
    return this.year;
  }

  private isValidDate(m: number, d: number, y: number): boolean {
    if (this.isLeapYear(y) && m === 2 && d <= 29) return true;
    return d <= SmartDate.daysInMonth[m - 1];
  }

  private isLeapYear(y: number) {
    if (y % 100 === 0) return y % 400 === 0;
    return y % 4 === 0;
  }
}

interface ISmartDate {
  getMonth(): number;
  getDay(): number;
  getYear(): number;
  dayOfTheWeek(): string;
}

export class SmartDate implements ISmartDate {
  private static readonly daysInMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  private month: number;
  private day: number;
  private year: number;

  constructor(m: number, d: number, y: number) {
    if (!this.isValidMonth(m)) throw new Error("invalid month");
    if (!this.isValidDay(m, d, y)) throw new Error("invalid day");

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

  private isValidMonth(m: number) {
    return m <= 12;
  }

  private isValidDay(m: number, d: number, y: number): boolean {
    if (this.isLeapYear(y) && m === 2 && d <= 29) return true;
    return d <= SmartDate.daysInMonth[m - 1];
  }

  private isLeapYear(y: number) {
    if (y % 100 === 0) return y % 400 === 0;
    return y % 4 === 0;
  }

  public dayOfTheWeek() {
    // begins from saturday as it was the first day of the millenium
    const daysInWeek = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    const years = this.getYear() - 2000;
    const yearsAsDays =
      years === 0 ? 0 : Math.floor(years / 4) + 1 + years * 365;
    const monthsPassed = SmartDate.daysInMonth.slice(0, this.getMonth() - 1);
    const monthsAsDays = !monthsPassed.length
      ? 0
      : monthsPassed.reduce((acc, current) => (acc += current));

    const total = yearsAsDays + monthsAsDays + this.getDay();
    const dayIndex = total % 7 === 0 ? 7 : (total % 7) - 1;
    return daysInWeek[dayIndex];
  }
}

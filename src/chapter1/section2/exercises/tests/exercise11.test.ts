import { SmartDate } from "../exercise11";

describe("SmartDate", () => {
  it("should instantiate SmartDate and return the correct values for day, month and year", () => {
    const day = 11;
    const month = 10;
    const year = 1990;
    const date = new SmartDate(month, day, year);
    expect(date).not.toBeNull();
    expect(date.getDay()).toBe(day);
    expect(date.getMonth()).toBe(month);
    expect(date.getYear()).toBe(year);
  });

  it("covers month > 12", () => {
    expect(() => new SmartDate(13, 11, 1990)).toThrow("invalid month");
  });

  it("covers days > days in month", () => {
    expect(() => new SmartDate(11, 30, 1990)).not.toThrow("invalid day");
    expect(() => new SmartDate(1, 31, 1990)).not.toThrow("invalid day");
    expect(() => new SmartDate(11, 32, 1990)).toThrow("invalid day");
    expect(() => new SmartDate(2, 30, 1990)).toThrow("invalid day");
    expect(() => new SmartDate(4, 31, 1990)).toThrow("invalid day");
  });

  it("covers leap year", () => {
    expect(() => new SmartDate(2, 29, 1992)).not.toThrow("invalid day");
    expect(() => new SmartDate(2, 29, 2000)).not.toThrow("invalid day");
    expect(() => new SmartDate(2, 29, 1991)).toThrow("invalid day");
    expect(() => new SmartDate(2, 29, 1900)).toThrow("invalid day");
  });

  it("dayOfTheWeek() should return the correct day of the week", () => {
    const firstDateMilenium = new SmartDate(1, 1, 2000);
    expect(firstDateMilenium.dayOfTheWeek()).toBe("Saturday");
    const randomDate1 = new SmartDate(4, 2, 2020);
    expect(randomDate1.dayOfTheWeek()).toBe("Thursday");
    const randomDate2 = new SmartDate(6, 18, 2008);
    expect(randomDate2.dayOfTheWeek()).toBe("Wednesday");
    const randomDate3 = new SmartDate(1, 22, 2006);
    expect(randomDate3.dayOfTheWeek()).toBe("Sunday");
  });
});

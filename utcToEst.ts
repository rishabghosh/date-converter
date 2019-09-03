export class Utils {
  constructor() {}

  static convertToEst(utcDateTime: string): Date {
    const utcToEstHourOffset = -4;
    const fullDate: Date = new Date(utcDateTime);
    return this.addOffsets(fullDate, utcToEstHourOffset, 0);
  }

  private static addOffsets(
    utcDateTime: Date,
    hourOffset: number,
    minuteOffset: number
  ): Date {
    const utcHours = utcDateTime.getHours();
    const utcMinutes = utcDateTime.getMinutes();
    const newDate = new Date(utcDateTime.getTime());
    newDate.setHours(utcHours + hourOffset);
    newDate.setMinutes(utcMinutes + minuteOffset);
    return newDate;
  }

   static formatDate(fullDate: Date): string {
    const year = fullDate.getUTCFullYear();
    const month = fullDate.getUTCMonth() + 1;
    const date = fullDate.getUTCDate();
    const hours24 = fullDate.getUTCHours();
    const minutes = fullDate.getUTCMinutes();
    const period = hours24 < 12 ? "AM" : "PM";
    const hours12 = hours24 < 12 ? hours24 : hours24 - 12;

    const formattedMonth = this.addLeadingZero(month);
    const formattedDate = this.addLeadingZero(date);
    const formattedHours = this.addLeadingZero(hours12);
    const formattedMinutes = this.addLeadingZero(minutes);

    return `${formattedDate}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes} ${period}`;
  }

  private static addLeadingZero(timeUnit: number): string {
    const timeUnitStr = timeUnit.toString();
    if (timeUnitStr.length < 2) {
      return "0" + timeUnitStr;
    }
    return timeUnitStr;
  }
}

const date = Utils.convertToEst("2019-10-03T20:01:13.534Z");
const formattedDate = Utils.formatDate(date);
console.log(formattedDate)
import { Utils } from "./utcToEst";

const constructSampleDate = function(year, month, date, hours, minutes) {
  return `${year}-${month}-${date}T${hours}:${minutes}:00.000Z`;
};

describe("convert to est", () => {
  

  it("should update hours with offset of -4", () => {
    const year = "2019";
    const month = "10";
    const date = "03";
    const hours = "20";
    const minutes = "01";
    const samepleDate = constructSampleDate(year, month, date, hours, minutes);
    const expectedDate = `${date}/${month}/${year} 04:${minutes} PM`;
    expect(Utils.convertToEst(samepleDate)).toBe(expectedDate);
  });

  it("should be able to update year, month, date and hours", () => {
    const year = "2019";
    const month = "01";
    const date = "01";
    const hours = "02";
    const minutes = "00";

    const sampleDate = constructSampleDate(year, month, date, hours, minutes);
    const expectedDate = `31/12/2018 10:${minutes} PM`;
    expect(Utils.convertToEst(sampleDate)).toBe(expectedDate);
  });

  it('should add leading zero for single digit of month, date, hours and minutes', () => {
    const year = "2019";
    const month = "02";
    const date = "10";
    const hours = "02";
    const minutes = "05";

    const sampleDate = constructSampleDate(year, month, date, hours, minutes);
    const expectedDate = `09/02/${year} 10:${minutes} PM`;
    expect(Utils.convertToEst(sampleDate)).toBe(expectedDate);
  });


});

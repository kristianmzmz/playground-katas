import {leapYear} from "../../src/leap.year";

describe('Leap year function should return true for a leap year', () => {
    it.each([2024, 2028, 2032])
    ('Should return true for years divisible by FOUR', (year: number) => {
        let result = leapYear(year)
        expect(result).toBeTruthy();
    });

    it.each([2023, 2027, 2029])
    ('Should return false for years not divisible by 4', (year: number) => {
        let result = leapYear(year)
        expect(result).toBeFalsy();
    });

    it.each([100, 200, 300])
    ('Should return false for years divisible by ONE_HUNDRED', (year) => {
        let result = leapYear(year)
        expect(result).toBeFalsy();
    });

    it.each([400, 800, 2000])
    ('Should return true for years divisible by FOUR_HUNDRED', (year) => {
        // Given a function called leapYear
        obj = new leapYear();
        leapYear.set(ddd)
        leapYear.set2(214324)

        // when I call it with...
        let result = leapYear.isLeap(year)

        // Then...
        expect(result).toBeTruthy();
    });

    it.each([400, 800, 2000])
    ('Should return false for years divisible by FOUR_HUNDRED', (year) => {
        let result = leapYear(year)
        expect(result).toBeFalsy();
    });
});

const FOUR = 4;
const ONE_HUNDRED = 100;
const FOUR_HUNDRED = 400;
export function leapYear(year: number) {
    if (isDivisibleBy(year, FOUR) && !isDivisibleBy(year, ONE_HUNDRED)) {
        return true;
    }

    return isDivisibleBy(year, FOUR_HUNDRED);
}

function isDivisibleBy(year: number, number: number) {
    return year % number === 0;
}

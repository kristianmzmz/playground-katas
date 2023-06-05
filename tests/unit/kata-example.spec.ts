import {FizzBuzz} from "../../src/fizz.buzz";

let fizzBuzz: FizzBuzz;
describe('Fizz buzz game', () => {
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    })

    it('should return 1 as string for 1', () => {
        let result = fizzBuzz.result(1);

        expect(result).toBe("1")
    });

    it.each([3, 6, 9])
    ('should return Fizz as string for multiples of 3', (multipleOfThree: number) => {
        let result = fizzBuzz.result(multipleOfThree);

        expect(result).toBe("Fizz")
    });

    it.each([5, 10, 20])
    ('should return Buzz as string for multiples of 5', (multipleOfFive: number) => {
        let result = fizzBuzz.result(multipleOfFive);

        expect(result).toBe("Buzz")
    });

    it('should return FizzBuzz as string for 15', () => {
        let result = fizzBuzz.result(15);

        expect(result).toBe("FizzBuzz")
    });
})

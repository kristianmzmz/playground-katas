export class FizzBuzz {
    result(number: number) {
        // Multiples de 3 y 5
        if (this.isMultipleOfThree(number) && this.isMultipleOfFive(number)) {
            return "FizzBuzz";
        }

        // Multiples de 3
        if (this.isMultipleOfThree(number)) {
            return "Fizz";
        }

        // Multiples de 5
        if (this.isMultipleOfFive(number)) {
            return "Buzz";
        }

        // El resto
        return number.toString();
    }

    private isMultipleOfFive(number: number) {
        return number % 5 === 0;
    }

    private isMultipleOfThree(number: number) {
        return number % 3 === 0;
    }
}

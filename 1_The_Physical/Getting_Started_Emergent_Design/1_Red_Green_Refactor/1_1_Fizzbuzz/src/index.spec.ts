import { BUZZ, FIZZBUZZ, fizzBuzz } from './fizzbuzz';
import { FIZZ } from './fizzbuzz';

describe("fizzBuzz", () => {
    let five: number;
    let three: number;

    beforeEach(() => {
        three = 3;
        five = 5;
    });

    it('should return a string', () => {
        const input = three;
        expect(typeof fizzBuzz(input)).toBe("string");
    });

    it('should return a Fizz if number is a multiple of 3', () => {
        const input = three;
        expect(fizzBuzz(input)).toBe(FIZZ);
    });

    it('should return a Fizz if number is a multiple of 5', () => {
        const input = five;
        expect(fizzBuzz(input)).toBe(BUZZ);
    });

    it('should return a FizzBuzz if number is a multiple of both 5 and 3', () => {
        const input = three * five;
        expect(fizzBuzz(input)).toBe(FIZZBUZZ);
    });
});

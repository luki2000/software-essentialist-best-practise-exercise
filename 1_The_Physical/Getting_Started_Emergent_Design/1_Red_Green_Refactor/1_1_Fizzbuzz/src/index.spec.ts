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

    it('should return a Fizz if number is 9', () => {
        expect(fizzBuzz(9)).toBe(FIZZ);
    });

    it('should return a Fizz if number is 42', () => {
        expect(fizzBuzz(42)).toBe(FIZZ);
    });

    it('should return a Fizz if number is 45', () => {
        expect(fizzBuzz(45)).toBe(FIZZBUZZ);
    });
/*
43 returns "43"
45 returns "FizzBuzz"
102 (you decide, throw an Error or handle some other way)
-12 (you decide, throw an Error or handle some other way)
any non-number (you decide, throw an Error or handle some other way)
*/
});

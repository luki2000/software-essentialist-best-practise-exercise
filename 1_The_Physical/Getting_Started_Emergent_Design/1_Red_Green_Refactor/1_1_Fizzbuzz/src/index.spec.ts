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

    it('should return a "43" if number is 43', () => {
        expect(fizzBuzz(43)).toBe("43");
    });

    it('should throw error for number above 100', () => {
        expect(() => fizzBuzz(102)).toThrow('input number out of bounds');
    });

    it('should throw error for number below 1', () => {
        expect(() => fizzBuzz(-12)).toThrow('input number out of bounds');
    });
/*
any non-number (you decide, throw an Error or handle some other way)
*/
});

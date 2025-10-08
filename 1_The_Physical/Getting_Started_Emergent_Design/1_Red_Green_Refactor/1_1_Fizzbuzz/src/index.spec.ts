import { BUZZ, FIZZBUZZ, fizzBuzz } from './fizzbuzz';
import { FIZZ } from './fizzbuzz';

describe("fizzBuzz", () => {

    it.each([{
        input: 3,
        expected: "string"
    }])('should return a string', ({ input, expected }) => {
        expect(typeof fizzBuzz(input)).toBe(expected);
    });

    it.each([
         { input: 3, expected: FIZZ },
         { input: 42, expected: FIZZ },
         { input: 9, expected: FIZZ },
    ])('should return a Fizz if number is a multiple of 3', ({input, expected}) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    it.each([
         { input: 5, expected: BUZZ },
    ])('should return a Buzz if number is a multiple of 5', ({input, expected}) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    it.each([
         { input: 15, expected: FIZZBUZZ },
         { input: 45, expected: FIZZBUZZ },
    ])('should return a FizzBuzz if number is a multiple of both 5 and 3', ({input, expected}) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    it('should return a "43" if number is 43', () => {
        expect(fizzBuzz(43)).toBe("43");
    });

    it.each([
         { input: 102, expected: 'input number out of bounds' },
         { input: -12, expected: 'input number out of bounds' },
    ])('should throw error when number is out of bounds, less than 1 and greater than 100', ({input, expected}) => {
        expect(() => fizzBuzz(input)).toThrow(expected);
    });

    it('if input is not a number', () => {
        // force type casting to undefined, method only accepts numbers
        expect(() => fizzBuzz(undefined as any)).toThrow('input not a number');
    });
});

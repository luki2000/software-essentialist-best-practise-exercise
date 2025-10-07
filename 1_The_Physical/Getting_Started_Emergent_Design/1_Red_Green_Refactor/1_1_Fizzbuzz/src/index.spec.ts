import { BUZZ, FIZZBUZZ, fizzBuzz } from './fizzbuzz';
import { FIZZ } from './fizzbuzz';

describe("fizzBuzz", () => {

    it('should return a string', () => {
        expect(typeof fizzBuzz(5)).toBe("string");
    });

    it('should return a Fizz if number is a multiple of 3', () => {
        expect(fizzBuzz(3)).toBe(FIZZ);
    });

    it('should return a Fizz if number is a multiple of 5', () => {
        expect(fizzBuzz(5)).toBe(BUZZ);
    });

     it('should return a FizzBuzz if number is a multiple of both 5 and 3', () => {
        expect(fizzBuzz(15)).toBe(FIZZBUZZ);
    });
});

import { BUZZ, fizzBuzz } from './fizzbuzz';
import { FIZZ } from './fizzbuzz';
/**
 * Write a function that takes numbers from 1 to 100 and outputs them as a string,
 * but for multiples of three it returns “Fizz” instead of the number, and for multiples
 * of five it returns “Buzz.” For numbers that are multiples of both three and five, it returns “FizzBuzz.”
*/

/**
 * 1. function receives a number and returns string
 * 2. numbers it can accept are 1 to 100
 * 3. if it can be divided by 3 and should return string Fizz
 * 4. if it can be divided by 5 it should return buzz
 * 5. if it can be divided by BOTH 3 and 5 and should return FizzBuzz
 */
// when commiting prefix with
// [New]
// [Refactor]
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
});

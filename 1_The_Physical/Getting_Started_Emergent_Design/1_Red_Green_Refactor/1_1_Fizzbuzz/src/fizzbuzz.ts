/**
 * Write a function that takes numbers from 1 to 100 and outputs them as a string,
 * but for multiples of three it returns “Fizz” instead of the number, and for multiples
 * of five it returns “Buzz.” For numbers that are multiples of both three and five, it returns “FizzBuzz.”
*/
export const FIZZ = 'Fizz' as const;
export const BUZZ = 'Buzz' as const;
export const FIZZBUZZ = 'fizzBUZZ' as const;

export function fizzBuzz(num: number) {
    const isMultipleOfThree = num % 3 === 0;
    return isMultipleOfThree ? FIZZ : "";
}

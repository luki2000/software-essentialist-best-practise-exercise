export const FIZZ = 'Fizz' as const;
export const BUZZ = 'Buzz' as const;
export const FIZZBUZZ = 'fizzBUZZ' as const;

export function fizzBuzz(num: number): string {
     if(typeof num !== "number") {
        throw new Error('input not a number');
    }
    if(num < 1 || num > 100) {
        throw new Error('input number out of bounds');
    }
    const isMultipleOfThree = num % 3 === 0;
    const isMultipleOfFive = num % 5 === 0;

    if (isMultipleOfThree && isMultipleOfFive) return FIZZBUZZ;
    if (isMultipleOfThree) return FIZZ;
    if (isMultipleOfFive) return BUZZ;

    return num.toString();
}

export const FIZZ = 'Fizz' as const;
export const BUZZ = 'Buzz' as const;
export const FIZZBUZZ = 'fizzBUZZ' as const;

export function fizzBuzz(num: number) {
    const isMultipleOfThree = num % 3 === 0;
    const isMultipleOfFive = num % 5 === 0;

    if (isMultipleOfThree && isMultipleOfFive) return FIZZBUZZ;
    if (isMultipleOfThree) return FIZZ;
    if (isMultipleOfFive) return BUZZ;
}

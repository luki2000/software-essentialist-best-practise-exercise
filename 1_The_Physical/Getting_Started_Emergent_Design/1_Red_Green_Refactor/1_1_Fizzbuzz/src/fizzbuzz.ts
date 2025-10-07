export const FIZZ = 'Fizz' as const;
export const BUZZ = 'Buzz' as const;
export const FIZZBUZZ = 'fizzBUZZ' as const;

export function fizzBuzz(num: number): string {
    const isMultipleOfThree = num % 3 === 0;
    const isMultipleOfFive = num % 5 === 0;

    if (isMultipleOfThree && isMultipleOfFive) return FIZZBUZZ;
    if (isMultipleOfThree) return FIZZ;
    if (isMultipleOfFive) return BUZZ;

    return "";
}

/**
 * 
 * 
 * 
 9 returns "Fizz"
43 returns "43"
42 returns "Fizz"
45 returns "FizzBuzz"
102 (you decide, throw an Error or handle some other way)
-12 (you decide, throw an Error or handle some other way)
any non-number (you decide, throw an Error or handle some other way)
 * 
 */
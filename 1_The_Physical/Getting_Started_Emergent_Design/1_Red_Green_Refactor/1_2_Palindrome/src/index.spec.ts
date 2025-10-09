import { Palindrome } from './index';
/**
 6. "Was It A Rat I Saw" returns true
 7. "Never Odd or Even" returns true
 8. "Never Odd or Even1" returns false 
 9. "1Never Odd or Even1" returns true
 * 
 */

describe('palindrome checker', () => {
    let palindrome: Palindrome;

    beforeEach(() => {
        palindrome = new Palindrome();
    });
    it('should take string and return boolean', () => {
        expect(typeof palindrome.checker("")).toBe("boolean")
    });

    it.each([
        {input: "mom", expected: true},
        {input: "Mom", expected: true},
        {input: "Was It A Rat I Saw", expected: true},
    ])('should return true if input is palindrome', ({input, expected}) => {
        expect(palindrome.checker(input)).toBe(expected);
    });

     it.each([
        {input: "Momx", expected: false},
    ])('should return false if input is not a palindrome', ({input, expected}) => {
        expect(palindrome.checker(input)).toBe(expected);
    });
});
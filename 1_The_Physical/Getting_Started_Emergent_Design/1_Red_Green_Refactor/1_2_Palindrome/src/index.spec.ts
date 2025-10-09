import { Palindrome } from './index';

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
        {input: "Never Odd or Even", expected: true},
        {input: "1Never Odd or Even1", expected: true},
    ])('should return true if input is palindrome', ({input, expected}) => {
        expect(palindrome.checker(input)).toBe(expected);
    });

     it.each([
        {input: "Momx", expected: false},
        {input: "Never Odd or Even1", expected: false},
    ])('should return false if input is not a palindrome', ({input, expected}) => {
        expect(palindrome.checker(input)).toBe(expected);
    });
});
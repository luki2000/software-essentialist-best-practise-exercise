import { Palindrome } from './index';

describe('palindrome checker', () => {
    let palindrome: Palindrome;

    beforeEach(() => {
        palindrome = new Palindrome();
    });

    it(`should return true when it's return type is a boolean`, () => {
        expect(typeof palindrome.checker("")).toBe("boolean")
    });

    it.each([
        {input: "mom"},
        {input: "Mom"},
        {input: "Was It A Rat I Saw"},
        {input: "Never Odd or Even"},
        {input: "1Never Odd or Even1"},
    ])('should return true if input is palindrome', ({input}) => {
        expect(palindrome.checker(input)).toBe(true);
    });

     it.each([
        {input: "Momx", expected: false},
        {input: "Never Odd or Even1", expected: false},
    ])('should return false if input is not a palindrome', ({input, expected}) => {
        expect(palindrome.checker(input)).toBe(expected);
    });
});
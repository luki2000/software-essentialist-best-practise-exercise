import { Palindrome } from './index';
/**
 1. "mom" returns true
 2. "Mom" returns true
 3. "MoM" returns true
 4. "Momx" returns false
 5. "xMomx" returns true
 6. "Was It A Rat I Saw" returns true
 7. "Never Odd or Even" returns true
 8. "Never Odd or Even1" returns false 
 9. "1Never Odd or Even1" returns true
 * 
 */

describe('palindrome checker', () => {
    it('should take string and return true', () => {
        const palindrome = new Palindrome();
        expect(palindrome.checker("")).toBe(true)
    });
});
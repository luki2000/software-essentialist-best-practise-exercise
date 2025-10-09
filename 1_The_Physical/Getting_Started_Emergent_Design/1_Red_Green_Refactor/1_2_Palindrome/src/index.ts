export class Palindrome {
    checker(text: string): boolean | undefined {
        const originalText = text;
        const reversedText = text.split("").reverse().join("");
        
        return originalText === reversedText;
    }
}
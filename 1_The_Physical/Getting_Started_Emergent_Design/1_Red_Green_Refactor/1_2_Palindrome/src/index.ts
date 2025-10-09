export class Palindrome {
    checker(text: string): boolean | undefined {
        const originalText = text.toLowerCase();
        const reversedText = text.split("").reverse().join("").toLowerCase();

        return originalText === reversedText;
    }
}
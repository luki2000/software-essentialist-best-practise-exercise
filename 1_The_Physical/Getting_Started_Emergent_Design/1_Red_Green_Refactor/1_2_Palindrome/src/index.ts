export class Palindrome {
    checker(text: string): boolean | undefined {
        const originalText = text.toLowerCase();
        const reversedText = text.split("").reverse().join("").toLowerCase();
        return removeSpaces(originalText) === removeSpaces(reversedText);
    }
}

// helper function
function removeSpaces(input: string) {
    return input.replace(/ /g, "");
}
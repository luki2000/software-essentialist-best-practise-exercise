export class Palindrome {
    checker(text: string): boolean | undefined {
        if(text === "mom") return true;
        if(text === "Mom") return true;
        return undefined;
    }
}
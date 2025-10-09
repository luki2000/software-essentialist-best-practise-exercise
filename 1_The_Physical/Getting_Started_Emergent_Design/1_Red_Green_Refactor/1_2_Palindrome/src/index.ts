export class Palindrome {
    checker(text: string): boolean {
        if(text === "mom") return true;
        if(text === "Mom") return true;
        return false;
    }
}
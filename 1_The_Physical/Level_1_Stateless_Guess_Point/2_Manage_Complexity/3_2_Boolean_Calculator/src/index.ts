export class BooleanCalculator {
    evaluate(str: string) {
        if(str === "TRUE") return true;
        if(str === "FALSE") return false;
        throw Error("not implmemented");
    }
}
export class BooleanCalculator {
    evaluate(str: string) {
        let tokens = str.split(" ");

        const hasNotOperator = tokens.find((token) => token === "NOT");
        if(hasNotOperator) {
            if(tokens[1] === "TRUE") return false;
            if(tokens[1] === "FALSE") return true;
        }
        if(str === "TRUE") return true;
        if(str === "FALSE") return false;
        throw Error("not implmemented");
    }
}
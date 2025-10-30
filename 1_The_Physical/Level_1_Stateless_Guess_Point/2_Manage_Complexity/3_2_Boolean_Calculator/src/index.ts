export class BooleanCalculator {
    evaluate(str: string) {
        let tokens = str.split(" ");

        if(tokens.length <= 2) {
            const hasNotOperator = tokens.find((token) => token === "NOT");
            if(hasNotOperator) {
                if(tokens[1] === "TRUE") return false;
                if(tokens[1] === "FALSE") return true;
            }
            if(str === "TRUE") return true;
            if(str === "FALSE") return false;
        }


        const hasAndOperator = tokens.find((token) => token === "AND");
        if(hasAndOperator) {
            const andOperatorIndex = tokens.indexOf('AND');
            const leftHandSide = tokens[andOperatorIndex-1];
            const rightHandSide = tokens[andOperatorIndex+1];

            if(leftHandSide === "TRUE" && rightHandSide === "TRUE") {
                return true;
            } else {
                return false;
            }
        }

        throw Error("not implmemented");
    }
}
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

        const hasOrOperator = tokens.find((token) => token === "OR");
        if(hasOrOperator) {
            const orOccurence = tokens.filter(w => w === "OR").length;
            for(let i= 0; i < orOccurence; i++) {
                const orOperatorIndex = tokens.indexOf('OR');
                const leftHandSide = tokens[orOperatorIndex-1];
                const rightHandSide = tokens[orOperatorIndex+1];

                const result = (leftHandSide === "TRUE" || rightHandSide === "TRUE") ? "TRUE" : "FALSE";
                tokens.splice(0, 3, result);
            }
        }

        const hasAndOperator = tokens.find((token) => token === "AND");
        if(hasAndOperator) {
            const andOccurence = tokens.filter(w => w === "AND").length;

             for(let i= 0; i < andOccurence; i++) {
                const andOperatorIndex = tokens.indexOf('AND');
                const leftHandSide = tokens[andOperatorIndex-1];
                const rightHandSide = tokens[andOperatorIndex+1];

                const result = (leftHandSide === "TRUE" && rightHandSide === "TRUE") ? "TRUE" : "FALSE";
                tokens.splice(0, 3, result);
            }
        }

        if(tokens[0] === "TRUE") return true;
        if(tokens[0] === "FALSE") return false; 
    }
}
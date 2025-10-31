export class BooleanCalculator {
    evaluate(str: string) {
        let tokens = str.split(" ");

        if(tokens.length === 1) {
            return this.convertStringToBoolean(str);
        }

        const hasNOTOperator = tokens.find((token) => token === "NOT");
        if(hasNOTOperator) {
            const notOccurence = tokens.filter(token => token === "NOT").length;
            for(let i= 0; i < notOccurence; i++) {
                const notOperatorIndex = tokens.lastIndexOf('NOT');
                const rightHandSideIndex = notOperatorIndex+1;
                const rightHandSide = tokens[rightHandSideIndex];

                const result = (rightHandSide === "TRUE") ? "FALSE" : "TRUE";
                tokens = tokens.slice(0, notOperatorIndex).concat(result, tokens.slice(notOperatorIndex + 2));
            }
        }

        const hasAndOperator = tokens.find((token) => token === "AND");
        if(hasAndOperator) {
            const andOccurence = tokens.filter(token => token === "AND").length;

            for(let i= 0; i < andOccurence; i++) {
                const andOperatorIndex = tokens.indexOf('AND');
                const leftHandSideIndex = andOperatorIndex-1;
                const rightHandSideIndex = andOperatorIndex+1;
                const leftHandSide = tokens[leftHandSideIndex];
                const rightHandSide = tokens[rightHandSideIndex];

                const result = (leftHandSide === "TRUE" && rightHandSide === "TRUE") ? "TRUE" : "FALSE";
                tokens = tokens.slice(0, leftHandSideIndex).concat(result, tokens.slice(rightHandSideIndex + 1));
            }
        }

        const hasOrOperator = tokens.find((token) => token === "OR");
        if(hasOrOperator) {
            const orOccurence = tokens.filter(token => token === "OR").length;
            for(let i= 0; i < orOccurence; i++) {
                const orOperatorIndex = tokens.indexOf('OR');
                const leftHandSideIndex = orOperatorIndex-1;
                const rightHandSideIndex = orOperatorIndex+1;
                const leftHandSide = tokens[leftHandSideIndex];
                const rightHandSide = tokens[rightHandSideIndex];

                const result = (leftHandSide === "TRUE" || rightHandSide === "TRUE") ? "TRUE" : "FALSE";
                tokens = tokens.slice(0, leftHandSideIndex).concat(result, tokens.slice(rightHandSideIndex + 1));
            }
        }

        return this.convertStringToBoolean(tokens[0]); 
    }

    convertStringToBoolean(str: string): boolean {
        return str.toLowerCase() === "true";
    }
}

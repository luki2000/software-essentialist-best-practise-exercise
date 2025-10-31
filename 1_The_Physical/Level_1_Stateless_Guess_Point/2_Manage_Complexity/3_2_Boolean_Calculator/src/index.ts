export enum TokenLibrary {
    TRUE = "TRUE",
    FALSE = "FALSE",
    NOT = "NOT",
    OR = "OR",
    AND = "AND",
}



export class BooleanCalculator {
    evaluate(str: string) {
        let tokens = str.split(" ");

        if(tokens.length === 1) {
            return this.convertStringToBoolean(str);
        }

        tokens = this.processNotOperator(tokens);
        tokens = this.processAndOperator(tokens);
        tokens = this.processOrOperator(tokens);

        return this.convertStringToBoolean(tokens[0]); 
    }

    convertStringToBoolean(str: string): boolean {
        return str.toLowerCase() === "true";
    }

    processNotOperator(tokens: Array<string>): Array<string> {
        let processedTokens = tokens;
        const hasNOTOperator = processedTokens.find((token) => token === TokenLibrary.NOT);
        if(hasNOTOperator) {
            const notOccurence = processedTokens.filter(token => token === TokenLibrary.NOT).length;
            for(let i= 0; i < notOccurence; i++) {
                const notOperatorIndex = processedTokens.lastIndexOf(TokenLibrary.NOT);
                const rightHandSideIndex = notOperatorIndex+1;
                const rightHandSide = processedTokens[rightHandSideIndex];

                const result = (rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.FALSE : TokenLibrary.TRUE;
                processedTokens = processedTokens.slice(0, notOperatorIndex).concat(result, tokens.slice(notOperatorIndex + 2));
            }
        }
        return processedTokens;
    }

    processAndOperator(tokens: Array<string>): Array<string> {
        let processedTokens = tokens;
        const hasAndOperator = processedTokens.find((token) => token === TokenLibrary.AND);
        if(hasAndOperator) {
            const andOccurence = processedTokens.filter(token => token === TokenLibrary.AND).length;

            for(let i= 0; i < andOccurence; i++) {
                const andOperatorIndex = processedTokens.indexOf(TokenLibrary.AND);
                const leftHandSideIndex = andOperatorIndex-1;
                const rightHandSideIndex = andOperatorIndex+1;
                const leftHandSide = processedTokens[leftHandSideIndex];
                const rightHandSide = processedTokens[rightHandSideIndex];

                const result = (leftHandSide === TokenLibrary.TRUE && rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE;
                processedTokens = processedTokens.slice(0, leftHandSideIndex).concat(result, tokens.slice(rightHandSideIndex + 1));
            }
        }
        return processedTokens;
    }

    processOrOperator(tokens: Array<string>): Array<string> {
        let processedTokens = tokens;
        const hasAndOperator = processedTokens.find((token) => token === TokenLibrary.OR);
        if(hasAndOperator) {
            const andOccurence = processedTokens.filter(token => token === TokenLibrary.OR).length;

            for(let i= 0; i < andOccurence; i++) {
                const orOperatorIndex = processedTokens.indexOf(TokenLibrary.OR);
                const leftHandSideIndex = orOperatorIndex-1;
                const rightHandSideIndex = orOperatorIndex+1;
                const leftHandSide = processedTokens[leftHandSideIndex];
                const rightHandSide = processedTokens[rightHandSideIndex];

                const result = (leftHandSide === TokenLibrary.TRUE || rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE;
                processedTokens = processedTokens.slice(0, leftHandSideIndex).concat(result, tokens.slice(rightHandSideIndex + 1));
            }
        }
        return processedTokens;
    }
}

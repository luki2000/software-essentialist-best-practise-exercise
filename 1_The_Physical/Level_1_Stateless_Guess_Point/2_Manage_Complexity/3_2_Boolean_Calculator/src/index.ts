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
        const hasNOTOperator = tokens.find((token) => token === TokenLibrary.NOT);
        const hasAndOperator = tokens.find((token) => token === TokenLibrary.AND);
        const hasOrOperator = tokens.find((token) => token === TokenLibrary.OR);
        const hasBrackets = tokens.find((token) => token.includes(')'));

        tokens = hasBrackets ? this.processBrackets(tokens) : tokens;
        tokens = hasNOTOperator ? this.processNotOperator(tokens) : tokens;
        tokens = hasAndOperator ? this.processAndOperator(tokens) : tokens;
        tokens = hasOrOperator ? this.processOrOperator(tokens) : tokens;

        return this.convertStringToBoolean(tokens[0]); 
    }

    convertStringToBoolean(str: string): boolean {
        return str.toLowerCase() === "true";
    }

    processNotOperator(tokens: Array<string>): Array<string> {
        let processedTokens = [...tokens];
        const notOccurence = processedTokens.filter(token => token === TokenLibrary.NOT).length;
        for(let i= 0; i < notOccurence; i++) {
            const notOperatorIndex = processedTokens.lastIndexOf(TokenLibrary.NOT);
            const rightHandSideIndex = notOperatorIndex+1;
            const rightHandSide = processedTokens[rightHandSideIndex];

            const result = (rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.FALSE : TokenLibrary.TRUE;
            processedTokens = processedTokens.slice(0, notOperatorIndex).concat(result, processedTokens.slice(notOperatorIndex + 2));
        }
        return processedTokens;
    }

    processAndOperator(tokens: Array<string>): Array<string> {
        let processedTokens = [...tokens];
        const andOccurence = processedTokens.filter(token => token === TokenLibrary.AND).length;

        for(let i= 0; i < andOccurence; i++) {
            const andOperatorIndex = processedTokens.indexOf(TokenLibrary.AND);
            const leftHandSideIndex = andOperatorIndex-1;
            const rightHandSideIndex = andOperatorIndex+1;
            const leftHandSide = processedTokens[leftHandSideIndex];
            const rightHandSide = processedTokens[rightHandSideIndex];

            const result = (leftHandSide === TokenLibrary.TRUE && rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE;
            processedTokens = processedTokens.slice(0, leftHandSideIndex).concat(result, processedTokens.slice(rightHandSideIndex + 1));
        }
        return processedTokens;
    }

    processOrOperator(tokens: Array<string>): Array<string> {
        let processedTokens = [...tokens];
     
        const orOccurence = processedTokens.filter(token => token === TokenLibrary.OR).length;

        for(let i= 0; i < orOccurence; i++) {
            const orOperatorIndex = processedTokens.indexOf(TokenLibrary.OR);
            const leftHandSideIndex = orOperatorIndex-1;
            const rightHandSideIndex = orOperatorIndex+1;
            const leftHandSide = processedTokens[leftHandSideIndex];
            const rightHandSide = processedTokens[rightHandSideIndex];

            const result = (leftHandSide === TokenLibrary.TRUE || rightHandSide === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE;
            processedTokens = processedTokens.slice(0, leftHandSideIndex).concat(result, processedTokens.slice(rightHandSideIndex + 1));
        }
        return processedTokens;
    }

    processBrackets(tokens: Array<string>): Array<string> {
        let processedTokens = [...tokens];
        const bracketOccurence = processedTokens.filter(token => token.includes(')')).length;

        for(let i= 0; i < bracketOccurence; i++) {
            const leftPatranthesisIndex =  processedTokens.findIndex((token) => token.includes('('));
            const rightPatranthesisIndex =  processedTokens.findIndex((token) => token.includes(')'));
            const elementsInParanthesis = processedTokens.slice(leftPatranthesisIndex, rightPatranthesisIndex+1);
            let elementsWithoutTheParanthesis = elementsInParanthesis.map(token => token.replace(/^\(|\)$/g, ''));


            const hasNOTOperator = tokens.find((token) => token === TokenLibrary.NOT);
            const hasAndOperator = tokens.find((token) => token === TokenLibrary.AND);
            const hasOrOperator = tokens.find((token) => token === TokenLibrary.OR);

            elementsWithoutTheParanthesis = hasNOTOperator ? [...this.processNotOperator(elementsWithoutTheParanthesis)] : elementsWithoutTheParanthesis;
            elementsWithoutTheParanthesis = hasAndOperator? [...this.processAndOperator(elementsWithoutTheParanthesis)] : elementsWithoutTheParanthesis;
            elementsWithoutTheParanthesis = hasOrOperator ? [...this.processOrOperator(elementsWithoutTheParanthesis)] : elementsWithoutTheParanthesis;
            
            processedTokens = processedTokens.slice(0, leftPatranthesisIndex).concat(elementsWithoutTheParanthesis, processedTokens.slice(rightPatranthesisIndex + 1));

        }
        
        return processedTokens;
    }
}

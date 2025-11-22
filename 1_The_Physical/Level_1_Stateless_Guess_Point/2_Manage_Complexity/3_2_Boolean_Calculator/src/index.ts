export enum TokenLibrary {
    TRUE = "TRUE",
    FALSE = "FALSE",
    NOT = "NOT",
    OR = "OR",
    AND = "AND",
}



export class BooleanCalculator {
    private isBooleanToken(token: string): boolean {
        return token === TokenLibrary.TRUE || token === TokenLibrary.FALSE;
    }

    private processUnary(tokens: string[], op: string, logic: (operand: string) => string): string[] {
        let processed = [...tokens];
        while (processed.includes(op)) {
            const index = processed.lastIndexOf(op);
            if (index === -1 || index + 1 >= processed.length) {
                throw new Error(`Invalid unary operator '${op}' at position ${index}: missing operand`);
            }
            const operand = processed[index + 1];
            if (!this.isBooleanToken(operand)) {
                throw new Error(`Unary operand must be boolean, got '${operand}'`);
            }
            const result = logic(operand);
            processed = processed.slice(0, index).concat(result, processed.slice(index + 2));
        }
        return processed;
    }

    private processBinary(tokens: string[], op: string, logic: (left: string, right: string) => string): string[] {
        let processed = [...tokens];
        while (processed.includes(op)) {
            const index = processed.indexOf(op);
            if (index === -1 || index < 1 || index + 1 >= processed.length) {
                throw new Error(`Invalid binary operator '${op}' at position ${index}: missing operands`);
            }
            const left = processed[index - 1];
            const right = processed[index + 1];
            if (!this.isBooleanToken(left) || !this.isBooleanToken(right)) {
                throw new Error(`Binary operands must be boolean, got '${left}' and '${right}'`);
            }
            const result = logic(left, right);
            processed = processed.slice(0, index - 1).concat(result, processed.slice(index + 2));
        }
        return processed;
    }

    private evaluateTokens(tokens: string[]): string[] {
        tokens = this.processUnary(tokens, TokenLibrary.NOT, (operand) =>
            operand === TokenLibrary.TRUE ? TokenLibrary.FALSE : TokenLibrary.TRUE
        );

        tokens = this.processBinary(tokens, TokenLibrary.AND, (left, right) =>
            (left === TokenLibrary.TRUE && right === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE
        );

        tokens = this.processBinary(tokens, TokenLibrary.OR, (left, right) =>
            (left === TokenLibrary.TRUE || right === TokenLibrary.TRUE) ? TokenLibrary.TRUE : TokenLibrary.FALSE
        );
        return tokens;
    }

    evaluate(str: string): boolean {
        const normalized = str.trim().toUpperCase().replace(/\s+/g, ' ');
        let tokens = normalized.split(' ');

        if (tokens.length === 0) return false;
        if (tokens.length === 1) {
            return this.convertStringToBoolean(tokens[0]);
        }

        tokens = this.processBrackets(tokens);
        tokens = this.evaluateTokens(tokens);

        if (tokens.length !== 1 || !this.isBooleanToken(tokens[0])) {
            throw new Error(`Expression did not reduce to a single boolean: ${tokens.join(' ')}`);
        }

        return this.convertStringToBoolean(tokens[0]);
    }

    processBrackets(tokens: string[]): string[] {
        let processed = [...tokens];
        let hasBrackets = true;
        while (hasBrackets) {
            const leftIndex = processed.findIndex(token => token.includes('('));
            const rightIndex = processed.findIndex(token => token.includes(')'));
            if (leftIndex === -1 || rightIndex === -1 || rightIndex <= leftIndex) {
                hasBrackets = false;
                break;
            }
            const innerGroup = processed.slice(leftIndex, rightIndex + 1);
            let innerTokens = innerGroup.map(token => token.replace(/^\(|\)$/g, ''));
            innerTokens = this.evaluateTokens(innerTokens);
            
            if (innerTokens.length !== 1) {
                throw new Error(`Bracketed subexpression did not reduce to a single boolean: ${innerTokens.join(' ')}`);
            }
            processed = processed
                .slice(0, leftIndex)
                .concat(innerTokens[0], processed.slice(rightIndex + 1));
        }
        return processed;
    }

    convertStringToBoolean(str: string): boolean {
        return str.toLowerCase() === 'true';
    }
}

export interface PasswordError {
    type: string; // string key of error
    message: string; // corresponding message of error type
}
export interface ValidationError {
    result: boolean; // tells us if password is valid true = at least one error present
    errors: Array<PasswordError>; // list of errors
}

export class Password {
    public validate(text: string): ValidationError {
        const errorMessages = [];
        let hasNoError = true;
        const outOfBound = this.textLengthOutOfBounds(text);
        const hasAtleastOneDigit = this.hasDigit(text);
        const hasAtleastOneCapital = this.hasCapitalLetter(text);
        
        if(!hasAtleastOneDigit) {
            errorMessages.push( {type: 'atleast_one_digit', message: 'must contain at least one digit'});
        }

        if(outOfBound) {
            errorMessages.push({type: 'out_of_bound', message: 'be between 5 and 15 characters long'});
        }

        if(!hasAtleastOneCapital) {
            errorMessages.push({type: 'atleast_one_capital', message: 'must contain a capital letter'});
        }

        hasNoError = errorMessages.length === 0;
    
        return {
            result: hasNoError,
            errors: [...errorMessages]
        };    
    }

    private textLengthOutOfBounds(str: string): boolean {
        return str.length < 5 || str.length > 10;
    }
    
    private hasCapitalLetter(str: string): boolean {
        return /[A-Z]/.test(str);
    }

    private hasDigit(str: string): boolean {
        return /\d/.test(str);
    }
}

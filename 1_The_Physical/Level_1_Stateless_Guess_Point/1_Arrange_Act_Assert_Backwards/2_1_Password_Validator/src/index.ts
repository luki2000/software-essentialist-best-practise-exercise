export interface PasswordError {
    type: string; // string key of error
    message: string; // corresponding message of error type
}
export interface ValidationError {
    result: boolean; // tells us if password is valid true = valid
    errors: Array<PasswordError>; // list of errors
}


// we now know that we need some method that validates
// the passwords format and will return an error object
// if one of the criteria is wrong

export class Password {
    public validate(text: string): ValidationError {
        const errorMessages = [];
        let hasError = false;
        const outOfBound = this.textLengthOutOfBounds(text);
        const hasAtleastOneDigit = this.hasDigit(text);

        if(outOfBound) {
            errorMessages.push({type: 'out_of_bound', message: 'be between 5 and 15 characters long'});
        }
        
        if(!hasAtleastOneDigit) {
            errorMessages.push( { type: 'missing_digit', message: 'must contain at least one digit'});
        }

        hasError = errorMessages.length > 0;
    
        return {
            result: hasError,
            errors: [...errorMessages]
        };    
    }


    private textLengthOutOfBounds(str: string): boolean {
        return str.length < 5 || str.length > 10;
    }
    
    private hasCapitalLetter(str: string) {
        return /[A-Z]/.test(str);
    }

    private hasDigit(str: string) {
        return /\d/.test(str);
    }
}

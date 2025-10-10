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
    validate(text: string): ValidationError {
        return {} as ValidationError;
    }
}

/*let error: ValidationError = {
result: false,
errors: [
    {
    type: 'missing_digit',
    message: 'must contain at least one digit'
    },
]
};*/
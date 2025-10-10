export interface PasswordError {
    type: string;
    message: string;
}
export interface ValidationError {
    result: boolean,
    errors: Array<PasswordError>
}
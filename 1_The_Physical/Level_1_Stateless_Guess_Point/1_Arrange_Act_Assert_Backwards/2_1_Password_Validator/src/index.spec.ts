import {Password, PasswordError, ValidationError} from './index'

describe('password validator', () => {
  let password: Password;
  beforeEach(() => {
    password = new Password();
  });

  test('if more than one passwword criteria fails return multiple errors, ', () => {
      let input = 'ngel';

      let result: Array<PasswordError>;
      
      result = password.validate(input).errors;

      expect(result.length).toBeGreaterThan(1);
  });

  test('when all password requirement are met the result in validation error object should be true for no errors', () => {
      let input = 'Angel1';
      let expectedErrorObject: ValidationError;
      
      expectedErrorObject = password.validate(input);

      expect(expectedErrorObject.result).toBeTruthy();
  });

  test.each([
    {input: 'Angel', errorType: 'atleast_one_digit', expected: 'must contain at least one digit'},
    {input: 'nGel', errorType: 'out_of_bound', expected: 'be between 5 and 15 characters long'},
    {input: 'nzel1', errorType: 'atleast_one_capital', expected: 'must contain a capital letter'}
  ])('it should return the right error message with the matching error type', ({ input, errorType, expected}) => {
    let result: string;
      
    result = password.validate(input).errors.filter(error =>  error.type === errorType)[0]?.message;

    expect(result).toBe(expected);
  });

  test.each([
    {input: 'maxwell1_c'},
    {input: 'maxwellTheBe'},
    {input: 'thePhysical1234567'}
  ])('result of validation error should return false for errors due to input not following password criteria', ({input}) => {
    let result: boolean;
      
    result = password.validate(input).result;

    expect(result).toBeFalsy();
  });

});

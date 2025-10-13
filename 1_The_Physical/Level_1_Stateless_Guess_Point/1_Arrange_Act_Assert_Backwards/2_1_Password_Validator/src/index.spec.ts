import {Password, PasswordError} from './index'

describe('password validator', () => {
  let password: Password;
  beforeEach(() => {
    password = new Password();
  });

  test('can have multiple errors', () => {
    // arrange
      let input = 'ngel';

      let result: Array<PasswordError>;
      
      // act
      result = password.validate(input).errors;

      // assert
      expect(result.length).toBeTruthy();
  });

  describe('error message', () => {
    test('if there is no digit within input it should return message missing digit message', () => {
      // arrange
      let input = 'Angel';
      let expected = 'must contain at least one digit';
      let result: string;
      
      // act
      result = password.validate(input).errors.filter(error =>  error.type === 'atleast_one_digit')[0]?.message;

      // assert
      expect(result).toBe(expected);
    });

    test('if there is less than 5 characters it should return message that it has to be between 5 and 15 characters long', () => {
      // arrange
      const input = 'nGel';
      let expected = 'be between 5 and 15 characters long';
      let result: string;
      
      // act
      result = password.validate(input).errors.filter(error =>  error.type === 'out_of_bound')[0]?.message;

      // assert
      expect(result).toBe(expected);
    });

    test('if there is no capital letters it should return message that it is missing capital letter', () => {
      // arrange
      const input = 'nzel1';
      let expected = 'must contain a capital letter';
      let result: string;
      
      // act
      result = password.validate(input).errors.filter(error =>  error.type === 'atleast_one_capital')[0]?.message;

      // assert
      expect(result).toBe(expected);
    });
  });

});

import { error } from 'console';
import {ValidationError, Password} from './index'
/**
 * 
- Contains at least one upper case letter
- Return an object containing a boolean result and an errors key that — when 
  provided with an invalid password — contains an error message or type for 
  all errors in occurrence. There can be multiple errors at a single time.
 * 
 */

describe('password validator', () => {
  let password: Password;
  beforeEach(() => {
    password = new Password();
  });

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  });

  describe('error message', () => {
    test('if there is no digit within input it should return message missing digit message', () => {
      // arrange
      let input = 'Angel';
      let expected = 'must contain at least one digit';
      let result: string;
      
      // act
      result = password.validate(input).errors.filter(error =>  error.type === 'missing_one_digit')[0]?.message;

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
      result = password.validate(input).errors.filter(error =>  error.type === 'missing_one_capital')[0]?.message;

      // assert
      expect(result).toBe(expected);
    });
  });

});

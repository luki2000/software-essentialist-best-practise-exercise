import {ValidationError, Password} from './index'
/**
 * 
- Between 5 and 15 characters long
- Contains at least one digit
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



  describe('validation error', () => {
    test('should return object with missing digit message', () => {
      expect(password.validate('Angel')).toEqual({
        result: false,
        errors: [
            {
              type: 'missing_digit',
              message: 'must contain at least one digit',
            },
        ]
        });
    });
  });

});



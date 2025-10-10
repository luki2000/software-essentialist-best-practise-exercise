import {ValidationError} from './index'
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

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  });



  describe('validation error', () => {
    test('should be returned for missing digit', () => {
      // Arrange
      let error: ValidationError = {
        result: true,
        errors: [
          {
            type: 'missing_digit',
            message: 'must contain at least one digit'
          },
        ]
      };
      // Act

      // Assert
      expect(error).toEqual({
        result: error.result,
        errors: [
          {
            type: error.errors[0].type,
            message: error.errors[0].message,
          }
        ],
      });
    });
  });

});



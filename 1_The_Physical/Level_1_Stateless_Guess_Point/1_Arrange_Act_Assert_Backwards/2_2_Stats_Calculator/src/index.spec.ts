import { findMaxNumber } from './index';

/**
 * 
 * 
 Your task is to process a sequence of integer numbers to determine the following statistics:
 Without using system Math library functions, process a sequence of integers to determine the following statistics:

 For example: [2, 4, 21, -8, 53, 40]

 minimum value = -8, maximum value = 53, number of elements in the sequence = 6, average value = 18.666666666667
 * 
 * input: an array of numbers
 * output: an object wih calc stats 
 * responsabilities
 * 1. find minimum value
 * 2. find maximum value
 * 3. calc number of elements
 * 4. calc average value
 * 
 */


describe('stats calculator', () => {

    it('finds the maximum number from an array of numbers', () => {

        let result = findMaxNumber([2,3,5,-1,8])
        
        expect(result).toBe(8);
    });

});
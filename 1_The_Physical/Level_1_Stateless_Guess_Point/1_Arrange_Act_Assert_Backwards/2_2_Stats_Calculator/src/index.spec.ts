import { findMaxNumber, findMinNumber, findArrLength, calculateAverage, Calculator } from './index';

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
 * 
 */


describe('stats calculator', () => {
    it('returns an object with the correct stats of an array', () => {
        expect(Calculator.retrieveStats([2, 4, 21, -8, 53, 40])).toStrictEqual({
            minimumValue: -8,
            maximumValue: 53,
            numberOfElements: 6,
            averageValue: 18.666666666667,
        });
    })

    describe('findMaxNumber', () => {
        it('finds the maximum number from an array of numbers', () => {
            let result = findMaxNumber([2,3,8,-1,5])
            expect(result).toBe(8);
        });
    });
    describe('findMinNumber', () => {
        it('finds the maximum number from an array of numbers', () => {
            let result = findMinNumber([2,3,8,-1,5])
            expect(result).toBe(-1);
        });
    });

    describe('findArrLength', () => {
         it('finds the number of elements in the array', () => {
            let result = findArrLength([2,3,8,-1,5])
            expect(result).toBe(5);
        });
    });

     describe('calculateAverage', () => {
         it('calculates the average of the elements in the array', () => {
            let result = calculateAverage([2,3,8,-1,5])
            expect(result).toBe(3.4);
        });
    });

});
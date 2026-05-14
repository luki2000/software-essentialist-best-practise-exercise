import { statsCalculator } from './index';

describe('stats calculator', () => {
    it.each([
        {input: [2, 4, 21, -8, 53, 40], expected: {
            minimumValue: -8,
            maximumValue: 53,
            numberOfElements: 6,
            averageValue: 18.666666666667,
        }},
        {input: [9, 4, 63, -10, 12, 10], expected: {
            minimumValue: -10,
            maximumValue: 63,
            numberOfElements: 6,
            averageValue: 14.666666666667,
        }},
    ])('adding an array of numbers as input will return an object with the arrays maximum value, minimum value, number of elements and average value', ({input, expected}) => {
        expect(statsCalculator(input)).toStrictEqual(expected);
    });

    it('should throw an error if the array is empty', () => {
        expect(() => statsCalculator([])).toThrow(new Error('Array is empty'));
    });
});


import { BooleanCalculator } from './index';

describe('boolean calculator', () => {
    const booleanCalculator = new BooleanCalculator()

    it.each([
        {input: 'TRUE', expected: true},
        {input: 'FALSE', expected: false}    
    ])('When $input is evaluated it should return $expected', ({input, expected}) => {
        expect(booleanCalculator.evaluate(input)).toBe(expected);
    });

    it.each([
        {input: 'NOT FALSE', expected: true},
        {input: 'NOT TRUE', expected: false}    
    ])('When $input is evaluated it should return $expected', ({input, expected}) => {
        expect(booleanCalculator.evaluate(input)).toBe(expected);
    });

    it.each([
        {input: 'TRUE AND FALSE', expected: false},
        {input: 'FALSE AND TRUE', expected: false},
        {input: 'TRUE AND TRUE', expected: true},
        {input: 'FALSE AND FALSE', expected: false}    
    ])('When $input is evaluated it should return $expected', ({input, expected}) => {
        expect(booleanCalculator.evaluate(input)).toBe(expected);
    });

    it.each([
        {input: 'TRUE OR FALSE', expected: true},
        {input: 'FALSE OR TRUE', expected: true},
        {input: 'TRUE OR TRUE', expected: true},
        {input: 'FALSE OR FALSE', expected: false}    
    ])('When $input is evaluated it should return $expected', ({input, expected}) => {
        expect(booleanCalculator.evaluate(input)).toBe(expected);
    });
});

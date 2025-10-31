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
        {input: 'FALSE OR FALSE', expected: false},
        {input: 'FALSE OR FALSE OR TRUE', expected: true}    
    ])('When $input is evaluated it should return $expected', ({input, expected}) => {
        expect(booleanCalculator.evaluate(input)).toBe(expected);
    });

    it('TRUE AND FALSE OR TRUE should result to true', () => {
         expect(booleanCalculator.evaluate("TRUE AND FALSE OR TRUE")).toBe(true);
    });

     it('TRUE AND FALSE OR TRUE OR TRUE should result to true', () => {
         expect(booleanCalculator.evaluate("TRUE AND FALSE OR FALSE OR TRUE")).toBe(true);
    });

    it('NOT TRUE AND TRUE should return false', () =>{
        expect(booleanCalculator.evaluate("NOT TRUE AND TRUE")).toBe(false);
    });

    it('NOT NOT TRUE should return true', () =>{
        expect(booleanCalculator.evaluate("NOT NOT TRUE")).toBe(true);
    });

    it('NOT NOT FALSE should return false', () =>{
        expect(booleanCalculator.evaluate("NOT NOT FALSE")).toBe(false);
    });
});

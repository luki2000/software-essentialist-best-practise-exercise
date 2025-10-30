import { BooleanCalculator } from './index';

describe('boolean calculator', () => {
    const booleanCalculator = new BooleanCalculator()

    it('TRUE as input should return true', () => {
        expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
    });

    it('FALSE as input should return false', () => {
        expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
    });

    it('NOT FALSE as input should return true', () => {
        expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
    });

    it('NOT TRUE as input should return false', () => {
        expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
    });

    it('TRUE AND FALSE as input should return false', () => {
        expect(booleanCalculator.evaluate("TRUE AND FALSE")).toBeFalsy();
    });

    it('TRUE AND TRUE as input should return true', () => {
        expect(booleanCalculator.evaluate("TRUE AND TRUE")).toBeTruthy();
    });

    it('FALSE AND FALSE as input should return false', () => {
        expect(booleanCalculator.evaluate("FALSE AND FALSE")).toBeFalsy();
    });
});

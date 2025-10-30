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

    it('TRUE && FALSE as input should return false', () => {
        expect(booleanCalculator.evaluate("TRUE && FALSE")).toBeFalsy();
    });
});

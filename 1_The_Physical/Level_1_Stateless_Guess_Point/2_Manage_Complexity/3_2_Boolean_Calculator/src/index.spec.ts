import { BooleanCalculator } from './index';

describe('boolean calculator', () => {
    const booleanCalculator = new BooleanCalculator()

    it('TRUE as input should return true', () => {
        expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
    });
});

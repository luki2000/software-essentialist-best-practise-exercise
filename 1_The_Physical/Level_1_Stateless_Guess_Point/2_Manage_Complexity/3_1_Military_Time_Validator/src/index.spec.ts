import { validateMilitaryTime } from './index';

describe('military time validator', () => {
    it.each([
        { input: "25:00 - 12:23", expected : false },
        { input: "22:00 - 23:12", expected : true },
        { input: "22:00 - 23:12", expected : true },
        { input: "60:00 - 23:90", expected : false },
        { input: "00:00 - 23:59", expected : true },
    ])('should know if $input is $expected as a valid military time', ({input, expected}) => {
        expect(validateMilitaryTime(input)).toBe(expected);
    });

    it('should know that end time being earlier than start time is invalid',() => {
        expect(validateMilitaryTime("23:00 - 15:30")).toBeFalsy();
    });

});

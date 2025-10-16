import { validateMilitaryTime } from './index';

// Description: Write a function (or a stateless class) capable of validating whether a string time range is a 
// valid military time range or not.

// what is military time?
// its time represented as day in hours (24h) so from 00:00 to 23:59
// or function will have the time string as input and respond in boolean wether it is valid or not
// each string time input as a "from" and "to" time seperated by a dash, both times need validation

// Here are some string examples.

// "01:12 - 14:32" (yes)
// "25:00 - 12:23" (no)
// "22:00 - 23:12" (yes)



describe('military time validator', () => {



    it('should know that "01:12 - 12:32" is valid military time', () => {
        expect(validateMilitaryTime("01:12 - 12:32")).toBeTruthy();
    });
});

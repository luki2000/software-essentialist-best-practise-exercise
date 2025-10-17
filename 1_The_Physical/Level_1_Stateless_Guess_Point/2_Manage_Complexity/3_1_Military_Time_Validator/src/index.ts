export function validateMilitaryTime(militaryTime: string) {
    const splitMilitaryTime = militaryTime.split(" - ");
    const fromTime = splitMilitaryTime[0];
    const toTime = splitMilitaryTime[1];

    return validateSingleTime(fromTime) && validateSingleTime(toTime);
}


function isValidHour(hour: number) {
    return hour >= 0 && hour <= 24; 
}

function isValidMinute(minute: number) {
    return minute >= 0 && minute <= 59; 
}


function validateSingleTime(time: string) {
    const splitTime = time.split(":");
    const hour = Number(splitTime[0]);
    const minute = Number(splitTime[1]);

    return isValidHour(hour) && isValidMinute(minute);
}
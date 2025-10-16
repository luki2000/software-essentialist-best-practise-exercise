export function validateMilitaryTime(militaryTime: string) {
    const splitMilitaryTime = militaryTime.split(" - ");
    const fromTime = splitMilitaryTime[0];
    const toTime = splitMilitaryTime[1];

    const fromTimeSplit = fromTime.split(":");
    const fromTimeHour = fromTimeSplit[0];
    const fromTimeMinute = fromTimeSplit[1];
    const isFromTimeValid = isValidHour(fromTimeHour) && isValidMinute(fromTimeMinute);
    
    const toTimeSplit = toTime.split(":");
    const toTimeHour = toTimeSplit[0];
    const toTimeMinute = toTimeSplit[1];
    const isToTimeValid = isValidHour(toTimeHour) && isValidMinute(toTimeMinute);

    return isFromTimeValid && isToTimeValid;
}


function isValidHour(h: string) {
    const hour = Number(h);
    return hour >= 0 && hour <= 23; 
}

function isValidMinute(m: string) {
    const minute = Number(m);
    return minute >= 0 && minute <= 59; 
}
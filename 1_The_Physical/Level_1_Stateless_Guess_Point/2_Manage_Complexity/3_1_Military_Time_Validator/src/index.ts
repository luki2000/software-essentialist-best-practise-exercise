export function validateMilitaryTime(militaryTime: string) {
    const splitMilitaryTime = militaryTime.split(" - ");
    const fromTime = splitMilitaryTime[0];
    const toTime = splitMilitaryTime[1];
    
    if(!isValidRange(fromTime, toTime)) {
        return false;
    }

    return validateSingleTime(fromTime) && validateSingleTime(toTime);
}


function isValidHour(hour: number) {
    return hour >= 0 && hour <= 23; 
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


function isValidRange(from: string, to: string) {
    const fromHour =  Number(from.split(":")[0]);
    const toHour = Number(to.split(":")[0]);
    const fromMinute =  Number(from.split(":")[1]);
    const toMinute = Number(to.split(":")[1]);

    if(fromHour === toHour && fromMinute >= toMinute) {
            return false;
    }
    

    return toHour >= fromHour;
}
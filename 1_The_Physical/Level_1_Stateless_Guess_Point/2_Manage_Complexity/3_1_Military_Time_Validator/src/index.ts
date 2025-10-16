export function validateMilitaryTime(militaryTime: string) {
    const splitMilitaryTime = militaryTime.split(" - ");
    const fromTime = splitMilitaryTime[0];
    const toTime = splitMilitaryTime[1];
    
    const isFromTimeValid = typeof fromTime === "string";
    const isToTimeValid = typeof toTime === "string";
    return isFromTimeValid && isToTimeValid;
}
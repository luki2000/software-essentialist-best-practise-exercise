export function findMaxNumber(arr: Array<number>): number | null {
    // 1 take full list of numbers
    // 2 loop over each number number
    // 3 set that number to a variable if it is larger than the previous number or if no number present, we start 
    // 4 return variable

    let maxNumber = null;

    for (const element of arr) {
        // maxNumber is element if it is empty
        if(maxNumber === null) {
            maxNumber = element;
        } else {
        // maxnumber is element if its greater than maxNumber
        maxNumber = element > maxNumber ? element : maxNumber;
        }        
    }

    return maxNumber;
}
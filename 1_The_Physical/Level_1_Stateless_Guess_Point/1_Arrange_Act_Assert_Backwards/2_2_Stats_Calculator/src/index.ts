
interface Stats {
    minimumValue: number;
    maximumValue: number;
    numberOfElements: number;
    averageValue: number;
}

export class Calculator {
    public static retrieveStats(arr: Array<number>): Stats {
        return {
            minimumValue: findMinNumber(arr),
            maximumValue: findMaxNumber(arr),
            numberOfElements: findArrLength(arr),
            averageValue: calculateAverage(arr)
        }
    }
}

export function findMaxNumber(arr: Array<number>): number {
    let firstElement = arr[0];
    let maxNumber = firstElement;
    for (const element of arr) {
        maxNumber = element > maxNumber ? element : maxNumber;
    }
    return maxNumber;
}

export function findMinNumber(arr: Array<number>): number {
    let firstElement = arr[0];
    let maxNumber = firstElement;
    for (const element of arr) {
        maxNumber = element < maxNumber ? element : maxNumber;
    }
    return maxNumber;
}

export function findArrLength(arr: Array<number>): number {
    return arr.length;
}

export function calculateAverage(arr: Array<number>): number {
    let total = 0;
    for (const element of arr) {
        total += element;
    }
    const avg = total / findArrLength(arr);
    return Number(avg.toFixed(12));
}
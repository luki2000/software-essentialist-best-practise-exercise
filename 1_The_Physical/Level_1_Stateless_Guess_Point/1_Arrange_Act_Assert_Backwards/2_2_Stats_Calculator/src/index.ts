export function findMaxNumber(arr: Array<number>): number | null {
    let firstElement = arr[0];
    let maxNumber = firstElement;

    for (const element of arr) {
        maxNumber = element > maxNumber ? element : maxNumber;
    }

    return maxNumber;
}

export function findMinNumber(arr: Array<number>): number | null {
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
    return 0;
}
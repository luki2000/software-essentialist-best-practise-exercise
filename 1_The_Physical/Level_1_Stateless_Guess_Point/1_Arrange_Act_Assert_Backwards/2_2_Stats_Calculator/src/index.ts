
interface Stats {
    minimumValue: number;
    maximumValue: number;
    numberOfElements: number;
    averageValue: number;
}

export function statsCalculator(arr: Array<number>): Stats {
    if(arr.length === 0) {
        throw new Error("Array is empty");
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (const num of arr) {
        if(num < min) min = num;
        if(num > max) max = num;
        sum += num;
    }
    return {
        minimumValue: min,
        maximumValue: max,
        numberOfElements: arr.length,
        averageValue: Number((sum / arr.length).toFixed(12)),
    }
}
const sumArray = (arr: number[]): number => {
    return arr.reduce((a, b) => a + b, 0);
}

let arr: number[] = [1, 2, 3, 4, 5];
console.log(sumArray(arr));
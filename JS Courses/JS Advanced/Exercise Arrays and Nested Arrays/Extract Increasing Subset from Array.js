function solve(array){ 
    let result = [];

    let currBiggestOneElement = Number.MIN_SAFE_INTEGER;
    for (const item of array) {
        if (item >= currBiggestOneElement) {
            currBiggestOneElement = item;
            result.push(item);
        }
    }

    return result;
}

console.log(solve([1,

    3,
    
    8,
    
    4,10, 12, 3, 2, 24]));
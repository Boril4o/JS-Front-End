function solve(arr, num) {
    let array = [...arr];

    if (array.length <= 0) {
        return;
    }

    let result = [array[0]];
    
    for (let i = num; i < array.length; i += num) {
        result.push(array[i]);
    }

    return result;
}

console.log(solve(['5',

'20',

'31',

'4',

'20'],

2));
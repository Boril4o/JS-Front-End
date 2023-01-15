function solve(array) {
    array.sort((a, b) => a - b);

    if (array.length % 2 === 0)
    {
        return array.slice(array.length / 2);
    }

    let firstHalf = array.slice(0, Math.floor(array.length / 2));
    let secondHalf = array.slice(Math.floor(array.length / 2));

    let result = [];
    if (firstHalf.length > secondHalf.length) {
        result = firstHalf;
    }
    else{
        result = secondHalf;
    }

    return result;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]))
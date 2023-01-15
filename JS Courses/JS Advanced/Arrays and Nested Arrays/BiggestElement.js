function solve(args) {
    let array = [...args];

    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > biggestNum) {
                biggestNum = array[i][j];
            }
        }
    }

    return biggestNum;
};

console.log(solve([[20, 50, 10],

    [8, 33, 145]]));
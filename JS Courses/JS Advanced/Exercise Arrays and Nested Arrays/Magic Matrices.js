function solve(array) {
    if (array.length <= 0) {
        return false;
    }

    const sum = array[0].reduce((a, b) => a + b, 0);

    for (let i = 1; i < array.length; i++) {
        let currRowSum = array[i].reduce((a, b) => a + b, 0);
        if (currRowSum !== sum) {
            return false;
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let currColumnSum = 0;
            for (let n = 0; n < array.length; n++) {
                currColumnSum += array[n][j];
            }

            if (currColumnSum != sum) {
                return false;
            }
        }
    }

    return true;
}


console.log(solve([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]));
function solve(args) {
    let array = [...args];

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    let count = 1;
    for (let i = 0; i < array.length; i++) {
        mainDiagonalSum += array[i][i];
        secondaryDiagonalSum += array[i][array[i].length - count++];   
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

solve([[20, 40], [10, 60]]);
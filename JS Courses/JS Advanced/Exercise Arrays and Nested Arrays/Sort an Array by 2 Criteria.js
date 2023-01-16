function solve(array) {
    array.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        else {
            return result;
        }
    });

    array.forEach(element => {
        console.log(element);
    });
}

solve(['alpha',

'beta','gamma']);
function solve(n, k){
    let array = [1];
    array.length = n;

    for (let i = 1; i < array.length; i++) {
       for (let j = 1; j <= k; j++) {
            if (i - j < 0) {
                break;
            }

            if (typeof(array[i]) === 'undefined') {
                 array[i] = array[i - j];
            }
            else{
                array[i] += array[i - j];
            }
       }
    }

    return array;
}

console.log(solve(8, 2));


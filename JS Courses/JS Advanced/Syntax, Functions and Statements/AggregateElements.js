function aggregateElements(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }

    let inverseSum = 0;
    for (let i = 0; i < array.length; i++) {
        inverseSum += Number(1 / array[i]);
    }

    let concatedArray = '';
    for (let i = 0; i < array.length; i++) {
        concatedArray += array[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatedArray);
}

aggregateElements([2, 4, 8, 16])
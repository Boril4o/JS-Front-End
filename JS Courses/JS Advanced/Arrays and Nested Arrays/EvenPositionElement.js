function getEvenNumbers(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push(array[i]);
        }
    }

    console.log(newArray.join(' '));
}

getEvenNumbers(['20', '30', '40','50', '60'])


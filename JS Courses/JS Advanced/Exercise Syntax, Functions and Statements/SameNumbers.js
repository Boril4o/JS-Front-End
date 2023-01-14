function isAllNumbersEqual(number){
    let array = String(number).split('').map(Number);
    let sum = array.reduce(function(a, b){
        return a + b;
    });

    let firstItem = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] !== firstItem){
            console.log(false);
            console.log(sum);
            return;
        }
    }

    console.log(true);
    console.log(sum);
}

isAllNumbersEqual(2222222);
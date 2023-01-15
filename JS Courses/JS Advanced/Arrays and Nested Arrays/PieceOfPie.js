function solve(...args) {
    let array = [...args[0]];
    let firstFlavor = args[1];
    let secondFlavor = args[2];

    let indexOfFirstFlavor = array.indexOf(firstFlavor);
    let indexOfSecondFlavor = array.indexOf(secondFlavor);

    return array.slice(Math.min(indexOfFirstFlavor, indexOfSecondFlavor), Math.max(indexOfFirstFlavor, indexOfSecondFlavor) + 1);
}

console.log(solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'));
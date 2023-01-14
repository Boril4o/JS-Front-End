function getLengthAndAverage(a, b, c){
    let firstTextLength = a.length;
    let secondTextLength = b.length;
    let thirdTextLength = c.length;

    let sum = firstTextLength + secondTextLength + thirdTextLength;
    let average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);
}

getLengthAndAverage('chocolate', 'ice cream', 'cake');
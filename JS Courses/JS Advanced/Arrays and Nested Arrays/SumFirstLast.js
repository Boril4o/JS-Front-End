function sumOfLastAndFirstIndex(array){
    let newArray = array.map(Number);
    let firstNum = newArray.shift();
    let lastNum = newArray.pop();
    return firstNum + lastNum;
}
    
console.log(sumOfLastAndFirstIndex(['5', '10']))
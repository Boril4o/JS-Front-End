function sumOfLastAndFirstIndex(array){
    let newArray = new Array(...array);
    let sum = newArray.shift + newArray.pop();
    return sum;
}
    
console.log(sumOfLastAndFirstIndex([10, 20 ,30]))
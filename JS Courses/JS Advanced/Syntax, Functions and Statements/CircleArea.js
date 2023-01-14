function getArea(number){
    let variableType = typeof(number);
    if (variableType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${variableType}.`)
    }
    else{
        console.log((Math.pow(number, 2) * Math.PI).toFixed(2));
    }
}

getArea('name')
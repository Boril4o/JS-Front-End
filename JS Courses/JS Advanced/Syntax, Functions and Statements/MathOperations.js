function solve(num1, num2, operator){
    let sum;

    if (operator === '+') {
        sum = num1 + num2;
    }
    else if(operator === '-'){
        sum = num1 - num2;
    }
    else if(operator === '*'){
        sum = num1 * num2;
    }
    else if(operator === '/'){
        sum = num1 / num2;
    }
    else if(operator === '%'){
        sum = num1 % num2;
    }
    else{
        sum = num1 ** num2;
    }

    console.log(sum);
}

solve(3, 5.5, '*')
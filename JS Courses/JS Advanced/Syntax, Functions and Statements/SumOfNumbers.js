function solve(n, m){
    let firstNum = Number(n);
    let secondNum = Number(m);

    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += Number(i);
    }

    return Number(sum);
}

console.log(solve('1', '5'))

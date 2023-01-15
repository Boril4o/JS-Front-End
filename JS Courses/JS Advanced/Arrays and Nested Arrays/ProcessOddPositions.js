function solve(args) {
    let array = [...args];
    array = array.filter((n, index) => index % 2 !== 0).reverse().map(n => n * 2);

    return array.join(' ');
}

console.log(solve([10, 15, 20, 25]))
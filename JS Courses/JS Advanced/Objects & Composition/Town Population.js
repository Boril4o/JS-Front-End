function solve(args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        let arraySplitted = args[i].split(' <-> ');
        let name = arraySplitted[0];
        let amount = arraySplitted[1];

       if (result[name] === undefined) {
        result[name] = [name, Number(amount)];
       }
       else {
        let currentAmount = result[name][1];
        result[name] = [name, Number(currentAmount) + Number(amount)];
       }
    }

   for (const item in result) {
        console.log(`${result[item][0]} : ${result[item][1]}`);
   }
}

solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000']);
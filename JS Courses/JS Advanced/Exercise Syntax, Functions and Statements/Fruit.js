function buyFruit(fruit, grams, price){
    let kilograms = grams / 1000;
    let money = kilograms * price;

    console.log(`I need \$${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}

buyFruit('apple', 1563, 2.35)
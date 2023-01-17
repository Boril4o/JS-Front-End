function solve(args) {
    let products = [];

    for (const item of args) {
        let [town, name, price] = item.split(' | ');
        price = Number(price);

        let product = products.find(n => n.name === name);
        if (product === undefined) {
            let obj = {
                name: name,
                town: town,
                price: price
            };

            products.push(obj);
        }
        else if (product.price > price){
            product.price = price;
            product.town = town;
        }
    }

    for (const item of products) {
        console.log(`${item.name} -> ${item.price} (${item.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10']);
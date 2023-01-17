function solve(args) {
    let products = [];

    for (const item of args) {
        let [productName, productPrice] = item.split(' : ');
        let product = {
            name: String(productName),
            price: Number(productPrice)
        };

        products.push(product);
    }

    products.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    let currentLetter = '';
    for (const item of products) {
        if (item.name[0] != currentLetter) {
            currentLetter = item.name[0];
            console.log(currentLetter.toLocaleUpperCase());
        }

        console.log(`   ${item.name}: ${item.price}`);
    }
}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
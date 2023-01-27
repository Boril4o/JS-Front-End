class CoffeeShop{
    constructor(name = '', menu = [], orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }

    addOrder(name) {
        if (!this.menu.some(x => x.item === name)) {
            return 'This item is currently unavailable!';
        }

        this.orders.push(name);
        return 'Order added!';
    }

    fulfillOrder() {
        if (this.orders.length === 0) {
            return 'All orders have been fulfilled!';
        }

        let order = this.orders.shift();
        return `The ${order.item} is ready!`
    }

    listOrders() {
        return this.orders;
    }

    dueAmount() {
        let ordersPrice = 0.0;
        for (const order of this.orders) {
            let itemPrice = this.menu.filter(x => x.item === order);
            ordersPrice += itemPrice;
        }

        return ordersPrice;
    }

    cheapestItem() {
        let item = {price: Number.MAX_VALUE};

        for (const currItem of this.menu) {
            if (currItem.price < item.price) {
                item = currItem;
            }
        }

        return item.item;
    }

    drinksOnly() {
        let drinks = this.menu.filter(x => x.type === 'drink');

        return drinks;
    }

    foodOnly() {
        let foods = this.menu.filter(x => x.type === 'food');

        return foods;
    }
}


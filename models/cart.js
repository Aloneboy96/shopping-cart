exports.Cart = function Cart(oldCart) {
    this.items = oldCart.items || {}; //json to store item
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        }
        storedItem.quantity++;
        storedItem.price += storedItem.item.price;
        this.totalQuantity++;
        this.totalPrice += storedItem.item.price;
    };

    this.reduce = function (id) {
        if (this.totalQuantity == 1) {
            this.items = {};
            this.totalQuantity = 0;
            this.totalPrice = 0;
            
            return 0;
        }
        var storedItem = this.items[id];

        this.totalQuantity--;
        this.totalPrice -= storedItem.item.price;
        if (storedItem.quantity == 1) {
            delete this.items[id];
            
            return 1;
        }
        storedItem.quantity--;
        storedItem.price -= storedItem.item.price;
        
        return 2;
    };

    this.remove = function (id) {
        var storedItem = this.items[id];

        this.totalQuantity -= storedItem.quantity;
        if (!this.totalQuantity) {
            this.items = {};
            this.totalPrice = 0;

            return false;
        }
        this.totalPrice -= storedItem.price;
        delete this.items[id];

        return true;
    }

    this.generateArray = function () {
        var arr = [];

        for (var id in this.items)
            arr.push(this.items[id]);

        return arr;
    };
}


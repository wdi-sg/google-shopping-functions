var getItems = function(products) {
    return products.items;
}

var getItemsByBrand = function(items, brand) {
    var newItems = [];
    for (var i in items) {
        if (items[i].product.brand == brand) {
            newItems.push(items[i].product.title);
        }
    }
    return newItems;
}

var getItemsByAuthor = function(items, author) {
    var newItems = [];
    for (var i in items) {
        if (items[i].product.author.name.includes(author)) {
            newItems.push(items[i].product.title);
        }
    }
    return newItems;
}
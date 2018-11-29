//1
var getItems = function(products) {
    return products.items;
}

//2
var getItemsByBrand = function(items, brand) {
    var newItems = [];
    for (var i in items) {
        if (items[i].product.brand == brand) {
            newItems.push(items[i].product.title);
        }
    }
    return newItems;
}

//3
var getItemsByAuthor = function(items, author) {
    var newItems = [];
    for (var i in items) {
        if (items[i].product.author.name.includes(author)) {
            newItems.push(items[i].product.title);
        }
    }
    return newItems;
}

//4
var getAvailableProducts = function(items) {
    var newItems = [];
    for (var i in items) {
        for (var j in items[i].product.inventories) {
          if (items[i].product.inventories[j].availability == "inStock") {
            newItems.push(items[i].product.title);
          }
        }
    }
    return newItems;
}

//5
//All items made by Sony
console.log(getItemsByBrand(getItems(products), "Sony"))

//All items made by Sony that are available.
var sonyItems = getItemsByBrand(getItems(products), "Sony");
var availItems = getAvailableProducts(getItems(products));
var sonyAvailItems = [];
for (var i in sonyItems) {
    for (var j in availItems) {
        if (sonyItems[i] == availItems[j]) {
            sonyAvailItems.push(sonyItems[i]);
        }
    }
}
console.log(sonyAvailItems);

//All available items by the author "Adorama Camera"
var authorItems = getItemsByAuthor(getItems(products), "Adorama Camera");
var authorAvailItems = [];
for (var i in authorItems) {
    for (var j in availItems) {
        if (authorItems[i] == availItems[j]) {
            authorAvailItems.push(authorItems[i]);
        }
    }
}
console.log(authorAvailItems);

//All available items by Nikon with the author eBay
var nikonItems = getItemsByBrand(getItems(products), "Nikon");
var ebayItems = getItemsByAuthor(getItems(products), "eBay");
var nikonEbayItems = [];
for (var i in nikonItems) {
    for (var j in ebayItems) {
        if (nikonItems[i] == ebayItems[j]) {
            nikonEbayItems.push(nikonItems[i]);
        }
    }
}
console.log(nikonEbayItems);
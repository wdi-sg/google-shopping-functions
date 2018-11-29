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



//Furthers
var whatToDo = prompt("What do you want to do? Input the corresponding numbers. Add as many filters as you need, seperating the numbers with a space. (Eg. 1 2 3)\n1. Search by item name.\n2. Filter by Brand.\n3.Filter by Country.\n4. Filter by Price ")
var result = [];
if (whatToDo.includes("1")) {
    var itemName = prompt("What is the item name?");
    for (var i in products.items) {
        if ((products.items[i].product.title.toLowerCase()).includes(itemName.toLowerCase())) {
            result.push(products.items[i].product.title);
        }
    }
}

if (whatToDo.includes("2")) {
    var brandFilter = prompt("What brand are you looking for? (Please only enter 1 brand)");
    for (var i in products.items) {
        if ((products.items[i].product.brand.toLowerCase()) == brandFilter.toLowerCase()) {
            result.push(products.items[i].product.title);
        }
    }
}

if (whatToDo.includes("3")) {
    var countryFilter = prompt("What country's products are you looking for?");
    for (var i in products.items) {
        if ((products.items[i].product.country.toLowerCase()) == countryFilter.toLowerCase()) {
            result.push(products.items[i].product.title);
        }
    }
}

if (whatToDo.includes("4")) {
    var minPrice = prompt("What is the minimum price?");
    var maxPrice = prompt("What is the maximum price?");
    if (products.items[i].product.inventories[0].price >= minPrice && products.items[i].product.inventories[0].price <= maxPrice) {
        result.push(products.items[i].product.title);
    }
}


var filterResults = function(result, numFilters) {
    var filteredResults = [];
    var counts = {}
    for (var i = 0; i < result.length; i++) {
        var filterItem = result[i];
        counts[filterItem] = counts[filterItem] ? counts[filterItem] + 1 : 1;
    }
    for (var key in counts) {
        if (counts[key] == numFilters) {
            filteredResults.push("\n" + key + "\n");
        }
    }
    return filteredResults;
}

alert(filterResults(result, (whatToDo.split(" ").map(Number)).length));


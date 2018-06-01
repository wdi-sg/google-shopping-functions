
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

// qn 1
function getItems(objectData) {
    return objectData.items
}
var itemsArray = getItems(products);
console.log(itemsArray);

// qn 2
function getItemsByBrand(items, brand) {
    var itemsByBrand = [];
    for (var i = 0; i < items.length; i++) {
    	if (items[i].product.brand === brand) {
    		itemsByBrand.push(items[i]);
    	}
	}
	return itemsByBrand;
}

console.log(getItemsByBrand(getItems(products), "Sony"));

// qn 3
function getItemsByAuthor(items, author) {
	var itemsByAuthor = [];
	for (var i=0; i < items.length; i++) {
		if (items[i].product.author.name.includes(author)) {
			itemsByAuthor.push(items[i]);
		}
	}
	return itemsByAuthor;
}

console.log(getItemsByAuthor(getItems(products), "eBay"));

// qn 4
function getAvailableProducts(items) {
	var availableProducts = [];
	for (var i=0; i < items.length; i++) {
		if (items[i].product.inventories[0].availability === "inStock") {
			availableProducts.push(items[i]);
		}
	}
	return availableProducts;
}

console.log(getAvailableProducts(getItems(products)));

// qn 5
// All items made by Sony.
console.log(getItemsByBrand(getItems(products), "Sony"));

// All items made by Sony that are available.
var sonyProducts = console.log(getItemsByBrand(getItems(products), "Sony"));

console.log(getAvailableProducts(sonyProducts));

// All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(getItems(products), "Adorama Camera"));

// All items made by Nikon with the author eBay.
var nikonProducts = console.log(getItemsByBrand(getItems(products), "Nikon"));

console.log(getAvailableProducts(nikonProducts));




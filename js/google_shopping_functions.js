
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

// Item function

function getItems(objectData) {
	return objectData.items;
}

// Brand function

function getItemsByBrand(items, brand) {
	var array = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.brand === brand) {
			array.push(items[i]);
		}
	}
	return array;
}

// Author function

function getItemsByAuthor(items, author) {
	var array = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.author.name.includes(author)) {
			array.push(items[i]);
		}
	}
	return array;
}

// Available function

function getAvailableProducts(items, author) {
	var array = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.inventories[0].availability === "inStock") {
			array.push(items[i]);
		}
	}
	return array;
}



// Searching by brands

// console.log(getItemsByBrand(getItems(products), "Sony"));
// console.log(getItemsByBrand(getItems(products), "Canon"));
// console.log(getItemsByBrand(getItems(products), "Nikon"));
// console.log(getItemsByBrand(getItems(products), "Panasonic"));



// Searching by authors

// console.log(getItemsByAuthor(getItems(products), "Target"));
// console.log(getItemsByAuthor(getItems(products), "CDW"));
// console.log(getItemsByAuthor(getItems(products), "eBay"));


// Search available products

// console.log(getAvailableProducts(getItems(products)));


// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

// ## 1.)
function getItems(objectData) {
	return objectData.items;
};

var itemsArray = getItems(products);

// ## 2.)
function getItemsByBrand(items, brand) {
	var arr = [];
items.forEach(function(item) {
	if (item.product.brand.toLowerCase() == brand.toLowerCase()) {
		arr.push(item);
	}

  });
	return arr;
};

console.log(getItemsByBrand(itemsArray, "Sony"));
console.log(getItemsByBrand(itemsArray, "Canon"));
console.log(getItemsByBrand(itemsArray, "Nikon"));
console.log(getItemsByBrand(itemsArray, "Panasonic"));


//## 3.) 
function getItemsByAuthor(items, author) {
	var arr = [];
	items.forEach(function(item) {
		if (item.product.author.name.toLowerCase() == author.toLowerCase()) {
			arr.push(item);
		}
	});
	return arr;
};

console.log(getItemsByAuthor(itemsArray, "Target"));
console.log(getItemsByAuthor(itemsArray, "CDW"));
console.log(getItemsByAuthor(itemsArray, "eBay"));

// ## 4.)
function getAvailableProducts(items) {
	arr = [];
	items.forEach(function(item) {
		if (item.product.inventories[0].availability == "inStock") {
			arr.push(item);
		}
	});
	return arr;
};

console.log(getAvailableProducts(itemsArray));

//## 5.)
console.log(getItemsByBrand(itemsArray, "Sony"));
console.log(getItemsByBrand(getAvailableProducts(itemsArray), "Sony"));
console.log(getAvailableProducts(getItemsByAuthor(itemsArray, 'Adorama Camera')));
console.log(getItemsByAuthor(getItemsByBrand(itemsArray, "Nikon"), "eBay"));

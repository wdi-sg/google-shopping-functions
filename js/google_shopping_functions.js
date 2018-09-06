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
// Part 1 Create a function called getItems that simply returns the items array from the google product object.
var getItems = function(objectData) {
  return objectData.items
}

// Part 2 Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
var getItemsByBrand = function (items, brand) {
	var brandedItemsArray = [];
 	for (var i = 0; i < items.length ; i++) {
		if (items[i].product.brand.toLowerCase() == brand.toLowerCase()) {
			brandedItemsArray.push(items[i]);
		};
	};
 	return brandedItemsArray;
};

// Part 3 Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
var getItemsByAuthor = function(items, author) {
	var authorArray = [];
	for (i = 0; i < items.length; i++) {
	// I used the method .includes as there were certain authors that were not an exact string to ebay.
		if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
			authorArray.push(items[i]);
		};
	};
	return authorArray;
};

// Part 4 Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products 
var getAvailableProducts = function(items) {
	var availableProductsArray = [];
	for (i=0; i<items.length; i++) {
		if(items[i].product.inventories[0].availability == "inStock") {
			availableProductsArray.push(items[i]);
		};
	};
	return availableProductsArray;
}
// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

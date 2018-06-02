
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array

function getItemsCount(itemData) {
  return itemData.items.length;
}


 * Define and use your functions here


// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

*/

//Q1
function getItems(itemData) {
	return itemData.items;
}
var allItems = getItems(products);
// console.log(allItems);

//Q2
function getItemsByBrand(items,brand) {
	var brandItems = []
	for (i = 0; i < items.length; i++) {
		if (items[i]["product"]["brand"].includes(brand)) {
			brandItems.push(items[i]);
		}
	} return brandItems;
}

// console.log(getItemsByBrand(allItems,"Sony"));
// console.log(getItemsByBrand(allItems,"Canon"));
// console.log(getItemsByBrand(allItems,"Nikon"));
// console.log(getItemsByBrand(allItems,"Panasonic"));

//Q3
function getItemsByAuthor(items,author) {
	var authorItems = []
	for (i = 0; i < items.length; i++) {
		if (items[i]["product"]["author"]["name"].includes(author)) {
			authorItems.push(items[i]);
		}
	} return authorItems;
}

// console.log(getItemsByAuthor(allItems,"Target"));
// console.log(getItemsByAuthor(allItems,"CDW"));
// console.log(getItemsByAuthor(allItems,"eBay"));


//Q4
function getAvailableProducts(items) {
	var availableItems = []
	for (i = 0; i < items.length; i++) {
		if (items[i]["product"]["inventories"][0]["availability"] === "inStock") {
			availableItems.push(items[i]);
		}
	} return availableItems;
}

// console.log(getAvailableProducts(allItems));




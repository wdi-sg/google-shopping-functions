
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.length;
 //console.log(itemData);
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products.items));

//1.) getItems(objectData)
//Create a function called `getItems` that simply returns the items array from the google product object.

function getItems(objectData) {
	return products.items;
}

//2.) getItemsByBrand(items, brand)
//Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.
//Test this function by searching for Sony, Canon, Nikon and Panasonic.

// var results = [];
// var itemByProduct = products["items"];

function getItemsByBrand (items, brand) {
	var results = [];

	for (i=0; i < items.length; i++){
		// console.log(items[i])
		// if (items[i]["brand"] === "Sony" || itemByProduct[i]["brand"] === "Canon" || itemByProduct[i]["brand"] === "Nikon" || itemByProduct[i]["brand"] === "Panasonic") {
		// 	results.push(itemByProduct);
		// }
		if (items[i].product.brand === brand) {
			results.push(items[i].product.title);
		}
	}
	return results;
}
//console.log(results);

//console.log(getItemsByBrand(products.items, "Canon"));

//3.) getItemsByAuthor(items, author)
// Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay

function getItemsByAuthor (items, author) {
	var results = [];
	for (j=0; j < items.length; j++) {
		if (items[j].product.author.name === author) {
			results.push(items[j].product.title);
		}
	}
	return results;
}

//4.) getAvailableProducts(items)
//Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array).

function getAvailableProducts (items) {
	var results = [];
	for (k=0; k < items.length; k++) {
		if (items[k].product.inventories[0].availability === "inStock") {
			results.push(items[k].product.title)
		}
	}
	return results;
}

// 5. 

function getAvailableSonyProducts (items) {
	var results = [];
	for (l=0; l < items.length; l++) {
		if (items[l].product.inventories[0].availability === "inStock" && items[l].product.brand === "Sony") {
			results.push(items[l].product.title)
		}
	}
	return results;
}

// function getEbayNikonProducts (items) {
// 	var results = [];
// 	for (m=0; m < items.length; m++) {
// 		if (items[m].product.author.name === "eBay" && items[m].product.brand === "Nikon") {
// 			results.push(items[m].product.title)
// 		} 
// 	}
// 	return results;
// }












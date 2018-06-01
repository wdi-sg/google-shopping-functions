
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*function getItemsCount(itemData) {
  return itemData.items.length;
}*/

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

//q1
function getItems(objectData) {
	return objectData.items
}
var itemsArray = getItems(products);
//	console.log(itemsArray);

//q2
function getItemsByBrand(items, brand) {
	var finalArr = [];
	items.forEach(function(item) {
		if (item.product.brand.toLowerCase() === brand.toLowerCase())
    	finalArr.push(item);
	})
	return finalArr;
}

//q3
function getItemsByAuthor(items, author) {
	var finalArr = [];
	items.forEach(function(item){
		if(item.product.author.name.toLowerCase().includes(author.toLowerCase()))	
			finalArr.push(item);
	})
	return finalArr;
}


//q4
function getAvailableProducts(items) {
	var finalArr = [];
	items.forEach(function(item){
		if (item.product.inventories[0].availability == 'inStock') {
      finalArr.push(item);
    }
  })
  return finalArr;
}


//q5
console.log(getItemsByBrand(itemsArray, 'Sony'));
console.log(getItemsByBrand(getAvailableProducts(itemsArray), 'Sony'));
console.log(getItemsByAuthor(getAvailableProducts(itemsArray), 'Adorama Camera'));
console.log(getItemsByAuthor(getItemsByBrand(itemsArray, 'Nikon'), 'eBay'));
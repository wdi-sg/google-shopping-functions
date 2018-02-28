
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

//returns the items array from the google product object.
function getItems(itemData){
	return itemData.items;
}

//takes an item array returns a new array of all items of a specified brand.
//note style is a string of brand
function getItemsByBrand(itemArray,brandName){
	var newArray = [];
	for(var i =0; i<itemArray.length; i++){
		var productDetails = itemArray[i].product;
		var productTitle = productDetails.title;
		var brand = productDetails.brand;
		if(brand == brandName){
			newArray.push(itemArray[i]);
		}
	}
	return newArray;
}

//takes an item array and returns a new array of all items by a specified author.
function getItemsByAuthor(itemArray,author){
	var newArray = [];
	for(var i=0; i<itemArray.length;i++){
		var productDetails = itemArray[i].product;
		var authorName = productDetails.author.name;
		if(authorName.search(author) != -1){
			newArray.push(itemArray[i]);
		}
	}
	return newArray;
}

//takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts(itemArray){
	var newArray = [];
	for(var i=0; i<itemArray.length;i++){
		var productDetails = itemArray[i].product;
		var inventories = productDetails.inventories;
		if(inventories[0].availability == "inStock"){
		newArray.push(itemArray[i]);
		}
	}
	return newArray;
}

//outputting
var items = getItems(products);
var sonyItems = getItemsByBrand(items,"Sony");
console.log("All items made by Sony:")
console.log(sonyItems);
console.log("All items made by Sony that are available");
console.log(getAvailableProducts(sonyItems));
console.log("All available items by author 'Adorama Camera'");
console.log(getItemsByAuthor(items,"Adorama Camera"));
console.log("All items made by Nikon with the author eBay");
var nikonItems = getItemsByBrand(items,"Nikon");
console.log(getItemsByAuthor(nikonItems,"eBay"));


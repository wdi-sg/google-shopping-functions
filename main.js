

//1. getItems function simply returns the items array from the google product object.
var getItems = function() {
	return products.items;
}

// getItemsNumber function returns a specific item witihin the items array
var getItemsIndex = function(Index) {
	return products.items[Index];
}

//2. getItembsByBrand function
// takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function(items, brand) {
	var sameBrand = [];
	for (var i = 0; i < items.length; i += 1) {
		// If conditional to check for matching brands. 
		// Both side changed to lowercase so that no result will be missed.
		if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
			// Push function used to add title into SameBrand array
			sameBrand.push(items[i]) 
		}
	}
//After for loop iterated products.items.length time, the sameBrand array should be returned	
	return sameBrand
}

//3.) getItemsByAuthor
//that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function(items, author) {
	var sameAuthor = [];
	for (var i = 0; i < items.length; i += 1) {
		// If conditional to check for matching author. 
		// Both side changed to lowercase so that no result will be missed.
		if (items[i].product.author.name.includes(author)) {
			// Push function used to add title into SameAuthor array
			sameAuthor.push(items[i]) 
		}
	}
//After for loop iterated products.items.length time, the sameAuthor array should be returned	
	return sameAuthor;
}

//4. getAvailableProducts(items)

var getAvailableProducts = function(items) {
	var availableProducts = [];
	for (var i = 0; i < items.length; i += 1) {
		// If conditional to check for available products. 
		// Both side changed to lowercase so that no result will be missed.
		if (items[i].product.inventories[0].availability === 'inStock') {
			// Push function used to add title into SameAuthor array
			availableProducts.push(items[i]) 
		}
	}
//After for loop iterated products.items.length time, the availableProducts array should be returned	
	return availableProducts;
}

//5.) Use your functions

// All items made by Sony.
var sonyProducts= getItemsByBrand(getItems(),'Sony')
console.log(sonyProducts);

// All items made by Sony that are available.
console.log(getAvailableProducts(sonyProducts));

// All available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(getItems(),"Adorama Camera")))

// All items made by Nikon with the author eBay.
var nikonProducts = getItemsByBrand(getItems(),'Nikon')
console.log(getItemsByAuthor(nikonProducts, 'eBay'))

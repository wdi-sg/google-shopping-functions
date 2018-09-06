
//part 1
var getItems = function () {

	return products.items;

};

//part 2
var getItemsByBrand = function (items, brand) {
	var arr = [];

	for (var i = 0; i < items.length ; i++) {
		if (items[i].product.brand == brand) {
			arr.push(items[i]);
		};
	};

	return arr;
};

//part 3
var getItemsByAuthor = function (items, author) {
	var arr = [];

	for (var i = 0; i < items.length ; i++) {
		if (items[i].product.author['name'] == author) {
			arr.push(items[i]);
		};
	};

	return arr;
}


//part 4
var getAvailableProducts = function (items) {
	var arr = [];

	for (var i = 0; i < items.length ; i++) {
		if (items[i].product.inventories[0].availability == "inStock") {
			arr.push(items[i]);
		};
	};

	return arr;
};


//part 5
console.log(getItemsByBrand(getItems(), "Sony"));




var SonyNAvailable = function () {
	var arr = [];

	for (var a=0; a< getItemsByBrand(getItems(), "Sony").length; a++){
		if(getItemsByBrand(getItems(), "Sony")[a].product.inventories[0].availability == "inStock") {
			arr.push(getItemsByBrand(getItems(), "Sony")[a]);
		};
	};

	return arr;


};

console.log(SonyNAvailable());




var authorNAvailable = function () {
	var arr = [];

	for (var a=0; a< getItemsByAuthor(getItems(), "Adorama Camera").length; a++){
		if(getItemsByAuthor(getItems(), "Adorama Camera")[a].product.inventories[0].availability == "inStock" ) {
			arr.push(getItemsByAuthor(getItems(), "Adorama Camera")[a]);
		}
	}

	return arr;
}

console.log(authorNAvailable());







var nikonNeBay = function () {
	var arr = [];

	for (var i = 0; i < getItemsByBrand(getItems(),'Nikon').length; i++) {
		if(getItemsByBrand(getItems(),'Nikon')[i].product.author['name'] == "eBay" ) {
			arr.push(getItemsByBrand(getItems(),'Nikon')[i]);
		};
	};

	return arr;
}

console.log(nikonNeBay());	



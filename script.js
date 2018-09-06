// Part I
 //console.log(products);

 getItems = function(objectData){
  		return objectData.items;
}
 
 var item_array = getItems(products);
 console.log(item_array);

 // Part II

getItemsByBrand = function(items, brands){
	var arr = [];
  	for (var i=0; i<items.length; i++){
  		var item = items[i];
  	 	if (item.product.brand === brands){
  	 		arr.push(item);
  	 	}
  	}
  	return arr;
 }

var item_array_Sony = getItemsByBrand(item_array, "Sony");
console.log(item_array_Sony);

var item_array_Canon = getItemsByBrand(item_array, "Canon");
console.log(item_array_Canon);

var item_array_Nikon = getItemsByBrand(item_array, "Nikon");
console.log(item_array_Nikon);

var item_array_Panasonic = getItemsByBrand(item_array, "Panasonic");
console.log(item_array_Panasonic);


// Part III

getItemsByAuthor = function(items, authors){
	var arr = [];
	for (var i=0; i<items.length; i++){
  		var item = items[i];
  	 	if (item.product.author.name.includes(authors)){
  	 		arr.push(item);
  	 	}
  	}
  	return arr;
}

var item_array_Target = getItemsByAuthor(item_array, "Target");
console.log(item_array_Target);

var item_array_CDW = getItemsByAuthor(item_array, "CDW");
console.log(item_array_CDW);

var item_array_eBay = getItemsByAuthor(item_array, "eBay");
console.log(item_array_eBay);

// Part IV

getAvailableProducts = function(items){
	var arr = [];
	for (var i=0; i<items.length; i++){
  		var item = items[i];
  	 	if (item.product.inventories[0].availability === "inStock"){
  	 		arr.push(item);
  	 	}
  	}
  	return arr;
}

var item_array_inStock = getAvailableProducts(item_array);
console.log(item_array_inStock);

// Part V

// (a)
var item_array_Sony = getItemsByBrand(item_array, "Sony");
console.log(item_array_Sony);

// (b)
var item_array_Sony_inStock = getAvailableProducts(item_array_Sony);
console.log(item_array_Sony_inStock);

// (c)
var item_array_Adorama_Camera = getItemsByAuthor(item_array, "Adorama Camera");
var item_array_Adorama_Camera_inStock = getAvailableProducts(item_array_Adorama_Camera);
console.log(item_array_Adorama_Camera_inStock);

// (d)
var item_array_Canon = getItemsByBrand(item_array, "Canon");
var item_array_Canon_eBay = getItemsByAuthor(item_array_Canon, "eBay");
console.log(item_array_Canon_eBay);




var getItems = function(products){
	return products.items;
}

var getItemsByAuthor = function(items,author){
	var newArray=[];
	for (i=0;i<items.length;i++){
		if(items[i].product.author.name===author){
			newArray.push(items[i])
		}
	}
	//console.log(newArray);
	return newArray;
}

var getItemsByBrand = function(items,brand){
	var newArray=[];
	for (i=0;i<items.length;i++){
		if(items[i].product.brand===brand){
			newArray.push(items[i])
		}
	}
	//console.log(newArray);
	return newArray;
}

var getAvailableProducts=function(items){
	var newArray=[];
	for (i=0;i<items.length;i++){
		if(items[i].product.inventories[0].availability==="inStock"){
			newArray.push(items[i])
		}
	}
	//console.log(newArray);
	return newArray;
}

console.log(getItemsByBrand(getItems(products),"Sony"));
console.log(getAvailableProducts(getItemsByBrand(getItems(products),"Sony")));
console.log(getAvailableProducts(getItemsByAuthor(getItems(products),"Adorama Camera")));
console.log(getItemsByAuthor(getItemsByBrand(getItems(products),"Canon"),"eBay - beststopdeals"));
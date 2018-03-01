

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// Question 1
function getItems(prod) { 
	console.log(prod.items);
	return prod.items;
 	// return console.log(prod.items);
 }

// Question 2
let productItems = getItems(products);

let x = [];
let y = [];
let z = [];
let a = [];

function getItemsByBrand(p, productname) {
	for (var i =0; i<productItems.length; i++){
		if(productItems[i].product.brand===productname){
			p.push((productItems[i]));
		};
	}
}

getItemsByBrand(x, "Canon");
console.log(x);
getItemsByBrand(y, "Nikon");
console.log(y);
getItemsByBrand(z, "Sony");
console.log(z);
getItemsByBrand(a, "Panasonic");
console.log(a);

// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

// Question 3

var b = [];
var c = [];
var d = [];

function getItemsByAuthor(arrayItems, productAuthor) {
	for (i=0; i<productItems.length; i++) {
		if (productItems[i].product.author.name===productAuthor) {
			arrayItems.push(productItems[i]);
		}
	}
}

getItemsByAuthor(b, "Target");
console.log(b);
getItemsByAuthor(c, "CDW");
console.log(c);
getItemsByAuthor(d, "eBay");
console.log(c);


//Question 4

let instockItems = [];

function getAvailableProducts(instockItems){
	for(i=0; i<productItems.length; i++){
		if(productItems[i].product.inventories[0].availability === "inStock");
		instockItems.push(productItems[i]);
	}
}

getAvailableProducts(instockItems);
console.log(instockItems);

// Question 5
// All items made by Sony.
getItemsByBrand(z, "Sony");
console.log(z);

// All items made by Sony that are available.

let instockItems_Sony = [];

function getAvailableProducts(instockItems_Sony){
	for(i=0; i<z.length; i++){
		if(z[i].product.inventories[0].availability === "inStock");
		instockItems_Sony.push(z[i]);
	}
}

getAvailableProducts(instockItems_Sony);
console.log(instockItems_Sony);


// All available items by the author "Adorama Camera"

// getAvailableProducts(instockItems);

var adoramaArray = [];

function getItemsByAuthor(arrayItems, productAuthor) {
	for (i=0; i<instockItems.length; i++) {
		if (instockItems[i].product.author.name===productAuthor) {
			arrayItems.push(instockItems[i]);
		}
	};
}

getItemsByAuthor(adoramaArray, "Adorama Camera");
console.log(adoramaArray);


// All items made by Nikon with the author eBay.

var e = [];

function getItemsByAuthor(arrayItems, productAuthor) {
	for (i=0; i<y.length; i++) {
		if (y[i].product.author.name===productAuthor) {
			arrayItems.push(y[i]);
		}
	}
}

getItemsByAuthor(e, "eBay");
console.log(e);

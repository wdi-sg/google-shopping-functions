// Part 1
// getItems(objectData)

var getItems = function() {
	return products.items;
}

// To test if the function works
// console.log( getItems() );



// Part 2
// getItemsByBrand(items, brand)

var getItemsByBrand = function(items, brand) {
	var holder = [];
	for ( var i = 0; i < items.length; i++ ) {
		if ( items[i].product.brand.toLowerCase() == brand.toLowerCase() ) {
			holder.push( items[i] );
		}
	} return holder;
}

// To test if the function works
// console.log( getItemsByBrand(getItems(),'sony') );



// Part 3
// getItemsByAuthor(items, author)

var getItemsByAuthor = function(items, author) {
	var holder = [];
	for ( var i = 0; i < items.length; i++ ) {
		// Checking if object author name includes value passed as argument
		if ( items[i].product.author.name.toLowerCase().includes( author.toLowerCase() ) == true ) {
			holder.push ( items[i] );
		}
	} return holder;
}

// To test if the function works
// console.log( getItemsByAuthor(getItems(),'ebay') );



// Part 4
// getAvailableProducts(items)

var getAvailableProducts = function(items) {
	var holder = [];
	for ( var i = 0; i < items.length; i++ ) {
		if ( items[i].product.inventories[0].availability.toLowerCase() == "instock" ) {
			holder.push ( items[i] );
		}
	} return holder;
}

// To test if the function works
// console.log(getAvailableProducts( getItems() ) );



// Part 5
// Use your functions

// * All items made by Sony. (Answer = 5)
console.log ( getItemsByBrand( getItems(),'sony' ));


// * All items made by Sony that are available. (Answer = 4)
console.log( getAvailableProducts( getItemsByBrand( getItems(),'sony' )));


// * All available items by the author "Adorama Camera" (Answer = 0)
console.log( getAvailableProducts(( getItemsByAuthor( getItems(),'adorama camera' ))));


// * All items made by Nikon with the author eBay. (Answer = 2)
console.log( getItemsByBrand(( getItemsByAuthor( getItems(), 'ebay' )) , 'Nikon' ));




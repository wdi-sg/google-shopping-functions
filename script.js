// 5.) Use your functions
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.
//
// ** Example Function Usage**
//
// //verbose -- outputs all cannon products
// var items = getItems(data);
// var cannonItems = getItemsByBrand(items, 'Cannon');
// console.log(cannonItems);
//
// //single line version -- does the same as above
// console.log(getItemsByBrand(getItems(data), 'Cannon'));


var allItems = getItems(products);

// All items made by Sony.
console.log ( getItemsByBrand(allItems,"Sony") );

// All items made by Sony that are available.
console.log ( getAvailableProducts( getItemsByBrand(allItems,"Sony") ) );

// All available items by the author "Adorama Camera"
console.log ( getItemsByAuthor(allItems,"Adorama Camera") );

// All items made by Nikon with the author eBay.
console.log ( getItemsByAuthor(getItemsByBrand(allItems,"Nikon"),"eBay") );



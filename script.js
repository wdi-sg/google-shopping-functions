// ##Part 1

// - Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

// var countItems = 0;

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i]; // Number of array in items
//   if(numItems == numItems){
//     countItems += 1;
//   }
// }
// console.log(countItems);

//#Part 2

//Print the title of all items with a backorder availability in inventories.

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   if(numItems.product.inventories[0].availability == "backorder") {
//     console.log("Backorder item: " + numItems.product.title);
//   }
//   }

// console.log(products.items[15].product.inventories[0]);
// Back order on line 145/720

//##Part 3

// Print the title of all items with more than one image link.

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var numImages = numItems.product.images
//   if(numImages.length > 1) {
//     console.log("Image link more than one:  " + numItems.product.title);
//   }
//   }

// console.log(products.items[15].product.images);
// 6 images with more than 1 image link

//##Part 4

//Print all "Canon" products in the items (careful with case sensitivity).

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCanon = numItems.product.brand;
//   if(itemCanon.toLowerCase() === "canon") {
//     console.log("Canon products:  " + numItems.product.title);
//   }
//   }

  //console.log(numItems.product.title);


//##Part 5

//Print all items that have an author name of "eBay" and are brand "Canon".

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCanon = numItems.product.brand;
//   var itemAuth = numItems.product.author.name;
//   if(itemCanon.toLowerCase() === "canon" && itemAuth.toLowerCase().includes("ebay") === true) {
//     console.log("Canon products from eBay:  " + numItems.product.title);
//   }
//   }

//##Part 6

//Print all the products with their brand, price, and an image link

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemBrand = numItems.product.brand;
//   var itemPrice = numItems.product.inventories[0].price;
//   var itemImage = numItems.product.images[0].link;
//   // if(itemCanon.toLowerCase() === "canon" && itemAuth.toLowerCase().includes("ebay") === true) {
//   //   console.log("Canon products from eBay:  " + numItems.product.title);
//   // }
//   console.log("Brand: " + itemBrand + "Price: " + itemPrice+ "Image: " + itemImage);
//   }

//##Further Part 1

// Prompt the user for the product brand and print only those products.

// Prompt the user if they want to see only new or used items.

// var userInputBrand = prompt("Please insert product brand and print");
// var userInputCon = prompt("Do you want to see new or used items");

// var userBrand = userInputBrand;
// var userCon = userInputCon;

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemBrand = numItems.product.brand;
//   var itemCond = numItems.product.condition;
//   if(userBrand.toLowerCase() === itemBrand.toLowerCase() && userCon === itemCond.toLowerCase()){
//     console.log(numItems.product.title);
//   }
//   }

//##Further Part 2


// Prompt the user what kind of search they want to do- search by brand or search by condition.

// Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

// var userInputSearch = prompt("Do you want to search by brand or condition");
// var userFilter = userInputSearch.toLowerCase();

// if(userFilter === "brand"){
//   var userInputBrand = prompt("Please insert product brand and print");
//   var userBrand = userInputBrand.toLowerCase();
//   for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemBrand = numItems.product.brand;
//   if(userBrand.toLowerCase() === itemBrand.toLowerCase()){
//     console.log(numItems.product.title);
//   }
//   }
// } else if(userFilter === "condition"){
//   var userInputCon = prompt("Do you want to see new or used items");
//   var userCon = userInputCon.toLowerCase();
//   for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCond = numItems.product.condition;
//   if(userCon === itemCond.toLowerCase()){
//     console.log(numItems.product.title);
//   }
//   }
// } else {
//   alert("Error!");
// }

//##Further Part 3

// Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

// var userInputSearch = prompt("Do you want to search by brand or condition");
// var userFilter = userInputSearch.toLowerCase();

// var count = 0;

// if(userFilter === "brand"){
//   var userInputBrand = prompt("Please insert product brand and print");
//   var userBrand = userInputBrand.toLowerCase();
//   for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemBrand = numItems.product.brand;
//   if(userBrand.toLowerCase() === itemBrand.toLowerCase()){
//     console.log(numItems.product.title);
//     count++
//   }
//   } if(count === 0){
//     console.log("Sorry, nothing found");
//   }
// } else if(userFilter === "condition"){
//   var userInputCon = prompt("Do you want to see new or used items");
//   var userCon = userInputCon.toLowerCase();
//   for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCond = numItems.product.condition;
//   if(userCon === itemCond.toLowerCase()){
//     console.log(numItems.product.title);
//     count++;
//   }
//   } if(count === 0){
//     console.log("Sorry, nothing found");
//   }
// } else {
//   alert("Error!");
// }

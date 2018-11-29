console.log(getItemsByBrand(getItems(arrayItems), 'Sony'))

console.log(getAvailableProducts('Sony'));

console.log(getAvailableProducts('Adorama Camera'));

console.log(getItemsByAuthor(getItemsByBrand(arrayItems, "Nikon"), "eBay"))





// var searchTerm = prompt("What brand are you searching for?");
// searchTerm = searchTerm.toLowerCase(); // to make it case insensitive
// for ( var i=0; i<arrayItems.length; i++){
// if (searchTerm === "brands") {
//   var searchResult = getItemsByBrand(getItems(arrayItems), "Sony")
// } else if (searchTerm === "author") {
//   var searchFail = prompt("Which author are you searching for?");
//   var searchResult = getItemsByBrand(getItems(arrayItems), author)
// } else {
//   var searchFail = prompt("Error, please try again");
// }
// }

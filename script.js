// 5.) Use your functions
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

var allItems = getItems(products);

console.log ("All items made by Sony:");
console.log ( getItemsByBrand(allItems,"Sony") );

console.log ("All items made by Canon:");
console.log ( getItemsByBrand(allItems,"Canon") );

console.log ("All items made by Nikon:");
console.log ( getItemsByBrand(allItems,"Nikon") );

console.log ("All items made by Panasonic:");
console.log ( getItemsByBrand(allItems,"Panasonic") );

console.log ("All items from Target:");
console.log ( getItemsByAuthor(allItems,"Target") );

console.log ("All items from CDW:");
console.log ( getItemsByAuthor(allItems,"CDW") );

console.log ("All items from eBay:");
console.log ( getItemsByAuthor(allItems,"eBay") );

console.log ("All items made by Sony that are available:");
console.log ( getAvailableProducts( getItemsByBrand(allItems,"Sony") ) );

console.log ("All available items by the author 'Adorama Camera':");
console.log ( getAvailableProducts( getItemsByAuthor(allItems,"Adorama Camera") ) );

console.log ("All items made by Nikon with the author 'eBay':");
console.log ( getItemsByAuthor(getItemsByBrand(allItems,"Nikon"),"eBay") );

// Further
// Prompt the user for the search term they are looking for.
// If no results were found, let the user know.
//
// Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:
// 1.The number of product items
// 2.The country of each item
// 3.Total price of all inventory
// 4.Search for one of the things above

var choice = parseInt(prompt("Would you like to do or see the:\n(1) Total number of product items\n(2) Countries of each item\n(3) Total price of all inventory\n(4) Search for items by given criteria\n\n(Please enter corresponding number for your selection)"));

if (choice === 1) {
  console.log ("The total number of product items is: " + totalItems(allItems));
}
else if (choice === 2) {
  console.log ("The countries of each item are: " + itemCountries(allItems));
}
else if (choice === 3) {
  console.log ("The total summed price of all inventory is: " + totalInvPrice(allItems));
}
else if (choice === 4) {
  var choice2 = prompt("Which criteria would you like to search by?\n(1) Brand name\n(2) Author name\n(3) Available items").toLowerCase();

  if (choice2 === "1" || choice2.includes("brand")) {

    var choice2brand = getItemsByBrand(allItems,prompt("Which brand?"));
    console.log(choice2brand);

    if (choice2brand.length === 0) {
      console.log ("Sorry, no results were found.");
    }
  }
  else if (choice2 === "2" || choice2.includes("author")) {
    var choice2author = getItemsByAuthor(allItems,prompt("Which author?"))
    console.log(choice2author);

    if (choice2author.length === 0) {
      console.log ("Sorry, no results were found.");
    }
  }
  else if (choice2 === "3" || choice3.includes("available")) {
    console.log( getAvailableProducts(allItems) );
  }
}













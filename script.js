//5.) Use your functions
//Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

var items = getItems(products);

/*
//All items made by Sony.
console.log(getItemsByBrand(items, "Sony"));

//All items made by Sony that are available.
console.log(getAvailableProducts(getItemsByBrand(items, "Sony")));

//All available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(items, "Adorama Camera")));

//All items made by Nikon with the author eBay.
console.log(getItemsByAuthor(getItemsByBrand(items, "Nikon"),"eBay"));
*/

//Further
//Prompt the user for the search term they are looking for.
//If no results were found, let the user know.
//Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:
//1. The number of product items
//2. The country of each item
//3. Total price of all inventory
//4. Search for one of the things above
//Create another search function and/or think of other interesting ways to combine the functions to perform useful searches.

var filteredItems = items;

var brand = prompt ("Filter by a particular brand? (leave blank for no)");

if (brand !== "") {
  filteredItems = getItemsByBrand(filteredItems, brand);
}

var author = prompt ("Filter by a particular seller? (leave blank for no)");

if (author !== "") {
  filteredItems = getItemsByAuthor(filteredItems, author);
}

var onlyAvailable = confirm("Would you like to only display available products?");
var displayTotal = confirm("Would you like to display the total number of products found?");
var displayCountry = confirm("Would you like to display the country of each item?");
var displayPrice = confirm("Would you like to display the total price of all items found?");

if (onlyAvailable) {
  filteredItems = getAvailableProducts(filteredItems);
}

for (var i = 0; i < filteredItems.length; i++) {
  console.log("Name: " + filteredItems[i].product.title);
  if (displayCountry) {
    console.log("Country: " + filteredItems[i].product.country);
  }
}

if (displayTotal) {
  if (filteredItems.length === 1) {
    console.log ("One item found.");
  } else {
    console.log(filteredItems.length + " items found.");
  }
}

if (displayPrice) {
  var totalPrice = 0;

  for (i = 0; i < filteredItems.length; i++) {
    totalPrice += filteredItems[i].product.inventories[0].price;
  }
  console.log("Total price of all items found: $" + totalPrice.toFixed(2));
}

if (!displayTotal && filteredItems.length === 0) {
  console.log("Sorry! Nothing found.");
}

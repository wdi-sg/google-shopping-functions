//Create a function called getItems that simply returns the items array from the google product object.

var getItems = function (objectData){
  return objectData.items;
}


//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function (itemArray,brand) {
  var itemlist = [];
  for ( i=0 ; i < itemArray.length ; i++) {
    if (itemArray[i].product.brand === brand) {
      itemlist.push(itemArray[i]);
    }
  }
  return itemlist
}

//Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function(itemArray,author){
  var itemlist = [];
  for ( i=0 ; i < itemArray.length ; i++) {
    if (itemArray[i].product.author.name.search(author) >=0) {
      itemlist.push(itemArray[i]);
    }
  }
  return itemlist
}

//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function(itemArray){
  var itemlist = [];
  for ( i=0 ; i < itemArray.length ; i++) {
    if (itemArray[i].product.inventories[0].availability === "inStock") {
      itemlist.push(itemArray[i]);
    }
  }
  return itemlist
}

//Use the functions you created in 1 - 4 to output (console.log) the following lists of items.
// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.
// remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.

console.log(getItemsByBrand(getItems(products),"Sony"));
console.log(getItemsByBrand(getAvailableProducts(getItems(products)),"Sony"));
console.log(getItemsByAuthor(getItems(products),"Adorama Camera"));
console.log(getItemsByAuthor(getItemsByBrand(getItems(products),"Nikon"),"eBay"));

//Prompt the user for the search term they are looking for.
//If no results were found, let the user know.

var userReq = prompt("What criterion do you want to search by? Brand / Author / Availability").toLowerCase();
var userReqSearchTerm = prompt("What are you searching for?")

if (userReq === "brand") {
  console.log(getItemsByBrand(getItems(products),userReqSearchTerm));
} else if (userReq === "author") {
  console.log(getItemsByAuthor(getItems(products),userReqSearchTerm));
} else if (userReq === "availability") {
  console.log(getAvailableProducts(getItems(products)));
} else {
  console.log("There were 0 results. Note that search is case sensitive")
}

//Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:
// The number of product items
// The country of each item
// Total price of all inventory
// Search for one of the things above



//Let the user enter in a maximum or minimum price. Only show them items that correspond.
//Let the user enter in a maximum and minimum price. Only show them items that correspond.

var maxPrice = prompt("Enter the maximum price of the item you are searching for");
var minPrice = prompt ("Enter the minimum price of the item you are searching for");

var minMax = function(itemArray,min,max){
  itemArray = getItems(products);
  var itemlist = [];
  for ( i=0 ; i < itemArray.length ; i++) {
    if (itemArray[i].product.inventories[0].price <= max && itemArray[i].product.inventories[0].price >= min) {
      itemlist.push(itemArray[i]);
    }
  }
  return itemlist
}

console.log(minMax(getItems(products),minPrice,maxPrice));

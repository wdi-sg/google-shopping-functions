
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(products) {
  return products.items.length;
}

/*
 * Define and use your functions here
 */
//1.) getItems(objectData)
//Create a function called getItems that simply returns the items array from the google product object.
function getItems(objectData) {
  return objectData.items;
}

//2.) getItemsByBrand(items, brand)
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
function getItemsByBrand(items, brand) {
  var arrayBrand = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
        arrayBrand.push(items[i]);
      }

  }
  return arrayBrand;
}

//3.) getItemsByAuthor(items, author)
//Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
function getItemsByAuthor(items, author) {
  var arrayAuthor = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
        arrayAuthor.push(items[i]);
      }

  }
  return arrayAuthor;
}

//4.) getAvailableProducts(items)
//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts(items) {
    var arrayAvail = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.inventories[0].availability.toLowerCase() === "instock") {
        arrayAvail.push(items[i]);
      }
    }
    return arrayAvail;
}

//Search by max price
function searchByMaxP (items, price) {
    var arrayMaxP = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.inventories[0].price < price) {
        arrayMaxP.push(items[i]);
      }
    }
    return arrayMaxP;
}

//Search by min price
function searchByMinP (items, price) {
    var arrayMinP = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.inventories[0].price > price) {
        arrayMinP.push(items[i]);
      }
    }
    return arrayMinP;
}

//Search by country
function getItemsByCountry(items, country) {
  var arrayCtry = [];
  for (i=0; i<items.length; i++) {
      if (items[i].product.country.toLowerCase() === country.toLowerCase()) {
        arrayCtry.push(items[i]);
      }
    }
    return arrayCtry;
}

//Get total price of inventory
function gettotalPriceInv (items) {
  var totalPriceInv = 0;
  for (i=0; i<items.length; i++) {
    totalPriceInv += items[i].product.inventories[0].price
      }
      return totalPriceInv;
}


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(products));

// // output array of all items of a specified brand
// console.log(getItemsByBrand(getItems(products),"canon"));

// // output array of all items by a specified author.
// console.log(getItemsByAuthor(getItems(products),"ebay"));

// // output array containing all of the available products
// console.log(getAvailableProducts(getItems(products)));

// //Use the functions you created in 1 - 4 to output (console.log) the following lists of items.
// //All items made by Sony.
// console.log(getItemsByBrand(getItems(products),"Sony"));

// //All items made by Sony that are available.
// console.log(getAvailableProducts(getItemsByBrand(getItems(products),"Sony")));

// //All available items by the author "Adorama Camera"
// console.log(getItemsByAuthor(getItems(products), "Adorama Camera"))

// //All items made by Nikon with the author eBay.
// console.log(getItemsByAuthor(getItemsByBrand(getItems(products),"nikon"),"ebay"))



//Further:
//Prompt the user for the search term they are looking for and return what the user requested
switch (searchTermPrompt ()) {
case ("b"): {
  console.log(getItemsByBrand(getItems(products), searchBrandPrompt ()));
  break;
}
case ("s"): {
  console.log(getItemsByAuthor(getItems(products), searchSellerPrompt ()));
  break;
}
case ("a"): {
  console.log(getAvailableProducts(getItems(products)));
  break;
}
case ("c"): {
  console.log(getItemsByCountry(getItems(products), searchCountryPrompt ()));
  break;
}
case ("maxp"): {
  console.log(searchByMaxP(getItems(products), maxPricePrompt ()));
  break;
}
case ("minp"): {
  console.log(searchByMinP(getItems(products), minPricePrompt ()));
  break;
}
case ("maxminp"): {
  console.log(searchByMaxP(searchByMinP(getItems(products), minPricePrompt ()), maxPricePrompt ()));
  break;
}
case ("n"): {
  console.log("Item Count: " + getItemsCount(products));
  break;
}
case ("t"): {
  console.log("Total price of inventory: " + gettotalPriceInv(getItems(products)));
  break;
}
default:
  alert("Invalid entry. Please refresh and try again.")
}



//Prompts:
function searchTermPrompt () {
  var searchTerm = prompt("Hi there! What are you looking for? Enter:\nb = search by Brand\ns = search by Seller\na = search by Availability\nc = search by Country\nmaxp = search by max price\nminp = search by min price\nmaxminp = search by max & min price\nn = no of product items\nt = total price of inventory");
  return searchTerm;
}

function searchBrandPrompt () {
  var searchBrand = prompt("Please enter the brand name e.g. canon, nikon, panasonic");
  return searchBrand;
}

function searchCountryPrompt () {
  var searchCtry = prompt("Please enter the country e.g. US");
  return searchCtry;
}

function searchSellerPrompt () {
  var searchSeller = prompt("Please enter the name of Seller e.g. eBay");
  return searchSeller;
}

function maxPricePrompt () {
  var maxP = prompt("Please key in max price: $");
  return maxP;
}

function minPricePrompt () {
  var minP = prompt("Please key in min price: $");
  return minP;
}

//End of prompts

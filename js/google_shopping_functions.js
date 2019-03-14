
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
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






// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products));

// output array of all items of a specified brand
console.log(getItemsByBrand(getItems(products),"canon"));

// output array of all items by a specified author.
console.log(getItemsByAuthor(getItems(products),"ebay"));

// output array containing all of the available products
console.log(getAvailableProducts(getItems(products)));

//Use the functions you created in 1 - 4 to output (console.log) the following lists of items.
//All items made by Sony.
console.log(getItemsByBrand(getItems(products),"Sony"));

//All items made by Sony that are available.
var sonyProducts = getItemsByBrand(getItems(products),"Sony");
console.log(getAvailableProducts(sonyProducts));

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(getItems(products), "Adorama Camera"))

//All items made by Nikon with the author eBay.
var nikonPdts = getItemsByBrand(getItems(products),"nikon");
console.log(getItemsByAuthor(nikonPdts,"ebay"))

//Further:
//Prompt the user for the search term they are looking for
searchTerm = prompt("Hi there! What are you looking for? Enter:\nb = search by Brand\ns = search by Seller\na = search by Availability");
if (searchTerm === "b") {
  searchBrand = prompt("Please enter the brand name e.g. canon, nikon, panasonic")
  console.log(getItemsByBrand(getItems(products),searchBrand));
}
else if (searchTerm === "s") {
  searchSeller = prompt("Please enter the name of Seller e.g. eBay")
  console.log(getItemsByAuthor(getItems(products), searchSeller))
}
else if (searchTerm === "a") {
  console.log(getAvailableProducts(getItems(products)))
} else {
  alert("Invalid entry. Please refresh and try again.")
}

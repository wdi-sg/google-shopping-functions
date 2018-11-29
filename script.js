// Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.
// All items made by Sony.

var itemsArray = getItems();
var result = getItemsByBrand(itemsArray, "Sony");
console.log(result);


// All items made by Sony that are available.

var itemsArray = getItems();
var brandArray = getItemsByBrand(itemsArray, "Sony");
result = getAvailableProducts(brandArray)
console.log(result);;



// All available items by the author "Adorama Camera"

var itemsArray = getItems();
result = getItemsByAuthor(itemsArray, "Adorama Camera");
console.log(result);

// All items made by Nikon with the author eBay.

var itemsArray = getItems();
var brandArray = getItemsByBrand(itemsArray, "Nikon");
result = getItemsByAuthor(brandArray,"eBay");
console.log(result);


// Further
// Prompt the user for the search term they are looking for.

userInputAuthor = prompt("Input brand") ;

userInputBrand = prompt("Input author") ;





// If no results were found, let the user know.

resultFound = false;
if (result.length >= 1) {
  resultFound = true;
}
if (resultFound = false) {
  alert("No results!")
}



// Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

// The number of product items

// The country of each item

// Total price of all inventory

// Search for one of the things above



// Further
// Let the user enter in a maximum or minimum price. Only show them items that correspond.

var itemsArray = getItems();
getProductsPrice = function(itemsArray, minPrice, maxPrice) {
  var ProductsPrice =[];
  for (var i = 0; i < itemsArray.length; i++) {
     var pdtInv = itemsArray[i].product.inventories;
     var pdt = itemsArray[i].product.title;
      for (var j = 0; j < pdtInv.length; j++) {
      var px = pdtInv[j].price;
        if (minPrice > 0 && maxPrice > 0 && px >= minPrice && px <= maxPrice) {
          productsPrice.push(pdt + " - " + px);
        } else if (minPrice > 0 && px >= minPrice ) {
          productsPrice.push(pdt + " - " + px);
        }
        else if ((maxPrice) > 0 && (px <= maxPrice )) {
          productsPrice.push(pdt + " - " + px);
        }
        else alert("Error!");
      }
  }
return (productsPrice);
}

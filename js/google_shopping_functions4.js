
var getItems = function(products) {
  var listOFItems = [];
  for (i = 0; i < products.items.length; i++) {
    listOFItems.push(products.items[i]);
  }

  return listOFItems;
};

var getItemsByBrand = function(items, brand) {
  var listOfItemsByBrand = [];
  for (i = 0; i < items.length; i++ ) {
    if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
      listOfItemsByBrand.push(items[i]);
    }
  }
  return listOfItemsByBrand;
}

var getItemsByAuthor = function (items, author) {
  var length = author.length;
  var listOfItemByAuthor = [];
  for (i = 0; i < items.length; i++ ) {
    if (author.toLowerCase() === items[i].product.author.name.substring(0,length).toLowerCase()) {
      listOfItemByAuthor.push(items[i]);
    }
  }
  return listOfItemByAuthor;
}


var getAvailableProducts = function (items) {
  var listOfAvailableProducts = [];
  for (i = 0; i < items.length; i++ ) {
    if (items[i].product.inventories[0].availability === "inStock") {
        listOfAvailableProducts.push(items[i]);
    }
  }
  return listOfAvailableProducts;
}

var listOFItems = getItems(products);

var userInputToDisplayBrand = prompt("Enter yes or no to show items by brand: ");
var userInputToDisplayAuthor = prompt("Enter yes or no to show items by author: ");

if (userInputToDisplayBrand.toLowerCase() === "yes" && userInputToDisplayAuthor.toLowerCase() === "no") {
  var brand = prompt("Enter the brand: ");
  var listOfItemsByBrand = getItemsByBrand(listOFItems, brand);

  if (listOfItemsByBrand.length > 0) {
    console.log("The list of items of brand " + brand + ": ");
    for (i = 0; i < listOfItemsByBrand.length; i++) {
      console.log(listOfItemsByBrand[i].product.title);
    }
  }

  else {
    console.log("No items found");
  }
}

else if (userInputToDisplayBrand.toLowerCase() === "no" && userInputToDisplayAuthor.toLowerCase() === "yes") {
  var author = prompt("Enter the author: ");
  var listOfItemsByAuthor = getItemsByAuthor(listOFItems, author);

  if (listOfItemsByAuthor.length > 0) {
    console.log("The list of items of author " + author + ": ");
    for (i = 0; i < listOfItemsByAuthor.length; i++) {
      console.log(listOfItemsByAuthor[i].product.title);
    }
  }

  else {
    console.log("No items found");
  }
}

else if (userInputToDisplayBrand.toLowerCase() === "yes" && userInputToDisplayAuthor.toLowerCase() === "yes") {
  var brand = prompt("Enter the brand: ");
  var author = prompt("Enter the author: ");
  var listOfItemsByBrand = getItemsByBrand(listOFItems, brand);
  var listOfItemByBrandAndAuthor = getItemsByAuthor(listOfItemsByBrand, author);

  if (listOfItemByBrandAndAuthor.length > 0) {
    console.log("The list of items by brand " + brand + " and author " + author + ": " );
    for (i = 0; i < listOfItemByBrandAndAuthor.length; i++) {
      console.log(listOfItemByBrandAndAuthor[i].product.title);
    }
  }

  else {
    console.log("No items found");
  }
}

else if (userInputToDisplayBrand.toLowerCase() === "no" && userInputToDisplayAuthor.toLowerCase() === "no") {
  console.log("You do not want to see any items");
}

else {
  console.log("Invalid Input");
}

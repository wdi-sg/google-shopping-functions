
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

var listOfItemsBySony = getItemsByBrand(listOFItems, "Sony");
console.log("The title of the items with Sony brand: ");
for (i = 0; i < listOfItemsBySony.length; i++ ) {
  console.log(listOfItemsBySony[i].product.title);
}
console.log("");

var listOfAvailableSonyItem = getAvailableProducts(listOfItemsBySony);
console.log("The title of available Sony items: ");
for (i = 0; i < listOfAvailableSonyItem.length; i++ ) {
  console.log(listOfAvailableSonyItem[i].product.title);
}
console.log("");


var listOfItemsByAdoramaCamera = getItemsByAuthor(listOFItems, "Adorama Camera");
var listOfAvailableAdoramaCamera = getAvailableProducts(listOfItemsByAdoramaCamera);
console.log("The title of items available items by the author Adorama Camera: " );
for (i = 0; i < listOfAvailableAdoramaCamera.length; i++ ) {
  console.log(listOfAvailableAdoramaCamera[i].product.title);
}
console.log("");

var listOfItemsByNikon = getItemsByBrand(listOFItems, "Nikon");
var listOfItemsByNikonEbay = getItemsByAuthor(listOfItemsByNikon, "eBay");
console.log("The title of items made by Nikon with the author eBay: ");
for (i = 0; i < listOfItemsByNikonEbay.length; i++ ) {
  console.log(listOfItemsByNikonEbay[i].product.title);
}
console.log("");


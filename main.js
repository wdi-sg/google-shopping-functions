var getItems = function(objectData) {
  return objectData.items;
  //items is an array of item Objects
};
items = getItems(products);

function getItemsByBrand(items, brandName) {
  //array which will hold our brand search results
  var brandArray = [];
  for (let i = 0; i < items.length; i++) {
    //brand reseult found in lowercase
    var brandResult = items[i].product.brand.toLowerCase();
    if (brandResult.includes(brandName.toLowerCase())) {
      brandArray.push(items[i]);
    }
  }
  console.log("Array of " + brandName + ":");
  console.log(brandArray);
  
  return brandArray;
}

function getItemsByAuthor(items, authorName) {
  var authorArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var authorResult = items[i].product.author.name.toLowerCase();
    if (authorResult.includes(authorName.toLowerCase())) {
      authorArray.push(items[i]);
    }
  }
  console.log("Array of " + authorName + ":");
  console.log(authorArray);
  
  
  return authorArray;
}

function getAvailableProducts(items) {
  var availableArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var availableResult = items[i].product.inventories[0].availability.toLowerCase();
    if (availableResult.includes("instock")) {
      availableArray.push(items[i]);
    }
  }
  console.log("Available items: ");
  console.log(availableArray);
  
  return availableArray;
}

var sonyItems = getItemsByBrand(items, "sony");

var sonyAvailableItems = getAvailableProducts(sonyItems);

var authorAdoramaItems = getItemsByAuthor(items, "adorama camera");

var nikonItems = getItemsByBrand(items, "nikon");

var nikonEbayItems = getItemsByAuthor(nikonItems, "ebay");

var userSearchTerm = prompt("What are you searching for?")

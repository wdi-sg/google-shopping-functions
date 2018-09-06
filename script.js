console.log(products.items.length);

//Create getItems function that returns items array products object.
var item = products.items;
var productsObjects;
var getItems = function(productsObjects) {
  return item;
}
var shopping = getItems(productsObjects);
console.log("Array of items: ", shopping);

//Create getItemsByBrand function that takes in array of items & returns new array of a specific brand.
getItemsByBrand = function (shopping, brand) {
  var box = [];
  for (i = 0; i < item.length; i++) {
    // console.log("brand: ", products.items[i].product.brand);
    if (brand === products.items[i].product.brand) {
      console.log("its true!");
      box.push(products.items[i]);
      // put the item in the box
      //console.log(box);
    }
  }
  return box;
}

var shoppingByBrand = getItemsByBrand(shopping, "Canon");
console.log("Shop by brand: ", shoppingByBrand);


//Create getItemsByAuthor function that takes in array of items & returns new array by author name.

getItemsByAuthor = function (shopping, author) {
  var boxAuthor = [];
  for (i = 0; i < item.length; i++) {
    if (author === products.items[i].product.author.name) {
      console.log("author");
      boxAuthor.push(products.items[i]);
      console.log(boxAuthor);
    }
  }
  return boxAuthor;
}

var shoppingByAuthor = getItemsByAuthor(shopping, "CDW");
console.log("Shop by author: ", shoppingByAuthor);












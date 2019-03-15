console.log("hello");
console.log(products);

//Question 1
console.log("Question 1");

var getItems = function(objectData) {
  return objectData

//   var prodArr = [];

//   for (var i = 0; i < products.items.length; i++){
//     var item = products.items[i];
//     prodArr.push(item.product);
//   }
//     return prodArr;
}

// console.log(getItems());

var items = getItems(products.items);

console.log(items);

//Question 2
console.log("Question 2");

var getItemsByBrand = function(items,itemBrand) {
  var brandArr = [];

  for ( var i = 0; i < items.length; i++){
    if(items[i].product.brand.toLowerCase() == itemBrand.toLowerCase()) {
      brandArr.push(items[i]);
    }
  }
  return brandArr;
}

console.log(getItemsByBrand(items,"Sony"));

//Question 3
console.log("Question 3");

var getItemsByAuthor = function(items,itemAuthor) {
  var authorArr = [];

  for ( var i = 0; i < items.length; i++){
    if(items[i].product.author.name.includes(itemAuthor)) {
      authorArr.push(items[i]);
    }
  }
  return authorArr;
}

console.log(getItemsByAuthor(items,"eBay"));

//Question 4
console.log("Question 4");


var getAvailableProducts = function(items) {
  var availabilityArr = [];

  for ( var i = 0; i < items.length; i++){
    if(items[i].product.inventories[0].availability === "inStock") {
      availabilityArr.push(items[i]);
    }
  }
  return availabilityArr;
}

console.log(getAvailableProducts(items));


//Question 5
console.log("Question 5");

console.log(items);
console.log(getItemsByBrand(items,"Sony"));
console.log(getAvailableProducts(getItemsByBrand(items, "Sony")));
console.log(getItemsByAuthor(items, "Adorama Camera"))
console.log(getItemsByAuthor(getItemsByBrand(items,"Nikon"),"eBay"));

// tried to see if I can use a function to derive the last question through an if formula - didn't work
// var getBrandAuthor = function (itemms,itemBrand,itemAuthor){
//   var comboArr=[]
//   for ( var i = 0; i < itemms.length; i++){
//     if ((getItemsByBrand === itemBrand) {
//       if (getItemsByAuthor === includes.itemAuthor){
//         comboArr.push(itemms[i]);
//     }
//   }
//   return comboArr;
// }

// console.log(getBrandAuthor(items, "Nikon","ebay"));


//Question 6

// var userInput = prompt("What brand are you searching for?");
   // console.log(userInput);
// var userInput = prompt("Search by 'Brand' or by 'Condition'?");
// var userInput = userInput.toLowerCase();

// if (userInput === "brand") {
// var userInput1 = prompt("What brand are you searching for?");
// }  else if (userInput = "condition") {
//     var userInput1 = prompt("Would you prefer a New or Old item?");
// }

//    console.log("List of all items available based on search criteria :" + userInput1.toUpperCase());

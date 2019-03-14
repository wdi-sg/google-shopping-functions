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




// var userInput = prompt("What brand are you searching for?");
   // console.log(userInput);


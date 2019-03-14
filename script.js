console.log("hello");
console.log(products);

//Question 1
console.log("Question 1");

var getItems = function() {
  var prodArr = [];

  for (var i = 0; i < products.items.length; i++){
    var item = products.items[i];
    prodArr.push(item.product);
  }
    return prodArr;
}

console.log(getItems());

var items = getItems(products.items);

console.log(items);

//Question 2
console.log("Question 2");

var getItemsByBrand = function(items,itemBrand) {
  var brandArr = [];

  for ( var i = 0; i < items.length; i++){
    if(items[i].brand == itemBrand) {
      brandArr.push(items[i]);
    }
  }
  return brandArr;
}

console.log(getItemsByBrand(items,"Sony"));

//Question 3
console.log("Question 3");







// var userInput = prompt("What brand are you searching for?");
   // console.log(userInput);


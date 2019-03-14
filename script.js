console.log("hello");
console.log(products);

//Question 1
console.log("Question 1");

var getItems = function() {
var prodArr = []

for (var i = 0; i < products["items"].length; i++){
  var item = products["items"][i];
  prodArr.push(item.product);
  }
  return prodArr
}

console.log(getItems());

//Question 2
console.log("Question 2");


var count = 0;
for (var i = 0; i < products["items"].length; i++) {
  console.log(products["items"][i].kind);
  if (products["items"][i].kind === "shopping#product") {
    count++;
  }
}
console.log(count + " items with shopping#product tag in 'kind'");
console.log("products with 'backorder' in 'availability' listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if( products["items"][i].product.inventories[0].availability === "backorder") {
    console.log(products["items"][i].product.title);
  }
}
console.log("products with more than 1 image link listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.images.length > 1){
    console.log(products["items"][i].product.title);
  }
}
console.log("products with brand Canon listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.brand === "Canon" ){
    console.log(products["items"][i].product.title);
  }
}
console.log("products with author eBay listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.author.name.slice(0, 4) === "eBay" ){
    console.log(products["items"][i].product.title);
  }
}
console.log("All products with their brand, price and first image link listed below");
for (var i = 0; i < products["items"].length; i++) {
  console.log(products["items"][i].product.brand);
  console.log(products["items"][i].product.inventories[0].price);
  console.log(products["items"][i].product.images[0]);
}

//Further
var uiChoiceBrandCondition = prompt("Search for brand or condition or both");
var searchCounter = 0;
if (uiChoiceBrandCondition === "both") {
  var uiBrand = prompt("Enter Product Brand to search for:");
  var uiCondition = prompt("Enter 'new' to see new items only, enter 'used' to see used items");
  console.log("Search results for " + uiCondition + " " + uiBrand + ":");
  for (var i = 0; i < products["items"].length; i++) {
    if( (products["items"][i].product.brand === uiBrand) && (products["items"][i].product.condition === uiCondition) ){
      console.log(products["items"][i].product.title);
      searchCounter++;
    }
  }
} else if (uiChoiceBrandCondition === "condition") {
  var uiCondition = prompt("Enter 'new' to see new items only, enter 'used' to see used items");
  console.log("Search results for " + uiCondition + ":");
  for (var i = 0; i < products["items"].length; i++) {
    if( products["items"][i].product.condition === uiCondition ){
      console.log(products["items"][i].product.title);
      searchCounter++;
    }
  }
} else if (uiChoiceBrandCondition === "brand") {
  var uiBrand = prompt("Enter Product Brand to search for:");
  console.log("Search results for " + uiBrand + ":");
  for (var i = 0; i < products["items"].length; i++) {
    if( products["items"][i].product.brand === uiBrand ){
      console.log(products["items"][i].product.title);
      searchCounter++;
    }
  }
}
if ( searchCounter === 0 ) {
  alert("Sorry, nothing found!");
}

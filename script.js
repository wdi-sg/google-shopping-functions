var items = products.items;

//search by ... return array
//###############################################################
var getItemsByBrand = function(items,brandName) {
  var brandA = [];
  for(var i = 0; i < items.length; i++) {
    if(items[i].product.brand == brandName){
      brandA.push(i);
    }
  }
  console.log(brandA);
  return brandA;
};

var getItemsByAuthor = function(items,author) {
  var AuthorA = [];
  for(var i = 0; i < items.length; i++) {
    var name = items[i].product.author.name;
    name.split(" ");
    if(name.includes(author)) {
      AuthorA.push(i);
    }
  }
  console.log(AuthorA);
  return AuthorA;
};

var getItemsByStock = function(items,stock) {
  var stockA = [];

  for(var i = 0; i < items.length; i++) {
    var stockRef = items[i].product.inventories[0].availability;
    if(stockRef == stock){
      stockA.push(i);
    }
  }
  console.log(stockA);
  return stockA;
};

//iteration of arrays
//###############################################################
var call = function(items, functionX) {
  var titleA = [];
  for(var i = 0; i < functionX.length; i++) {
    var title = items[functionX[i]].product.title;
    titleA.push(title);
  }
  console.log(titleA.join(" || "));
  return titleA;
};

var compare = function(items, compare2, compare1) {
  var comparison = [];
  for (var i = 0; i < compare1.length; i++) {
    for (var j = 0; j < compare2.length; j++) {
        if (compare1[i] == compare2[j]) {
          comparison.push(compare1[i]);
        }
    }
  }
  console.log(comparison);
  return comparison;
};


//SEARCH
//###############################################################
var reprompt = function(rep, callback){
  alert("Error: Your " + rep + " entry was invalid please try again");
  callback();
};

var output = function(items, array){
  var totalPrice = 0;
  var numberOfItems = 0;
  var countryOfItems = "";
  for(var j = 0; j < array.length; j++) {
    var i = array[j];
    totalPrice += items[i].product.inventories[0].price;
    numberOfItems += 1;
    var string = " || " + items[i].product.country;
    countryOfItems += string;
  }
  alert("The total price is " + totalPrice + ", number of items is " + numberOfItems + ", and the countries of production include" + countryOfItems + ".");
}
var searchByF = function(searchByArray){
  var absArray = ["author", "brand", "stock"];
  var absFunction = ["getItemsByAuthor", "getItemsByBrand", "getItemsByStock"];
  var absString = ["(eBay/Target/CDW):", "(Sony/Nikon/Canon/Panasonic):", "(inStock/backorder):"]
  var absSelect = [];
  for(var j = 0; j < 3; j++) {
    if(searchByArray.includes(absArray[j])){
      var searchByInput = prompt("Input the " + absArray[j] + " here " + absString[j]);
      absSelect.push(j);
    }
  }
  if(absSelect.length === 0){
    reprompt("search", search);
  }
  // for double options (dont work)
  // if(absSelect.length === 2){
  //   for(var i = 0; i < absSelect; i++){
  //     var absFunction = absFunction[absSelect[i]];
  //     absFunction = window[absFunction](items, searchByInput);
  //     compare(items, absFunction, absFunction)
  //     // PROB!!need to push arguement into compare one at a time
  //   }
  // }
  //for single options (works for brand and author not stock)
  for(var i = 0; i < absSelect; i++){
    var absFunction = absFunction[absSelect[i]];
    absFunction = window[absFunction](items, searchByInput);
    output(items, absFunction);
  }
};

var search = function(){
  var maxMinO = {
    max: "na",
    min: "na"
  }
  var searchBy = prompt("Search by (brand, author, stock) or any combination of them:");
  searchBy = searchBy.toLowerCase();
  var searchBy = searchBy.split(" ").join(",").split("  ").join(",").split("/").join(",").split("|").join(",").split(".").join(",").split(",");
  searchByF(searchBy);
  var maxPrice = prompt("Search by max price/ enter N to decline");
  var minPrice = prompt("Search by min price/ enter N to decline");
};



//calls
//###############################################################
getItemsByBrand(items,"Sony");
getItemsByAuthor(items,"pictureline.com");
getItemsByStock(items,"inStock");
call(items,getItemsByStock(items,"inStock"));
compare(items, getItemsByBrand(items,"Sony"), getItemsByStock(items,"inStock"));
getItemsByAuthor(items,"Adorama Camera");
compare(items, getItemsByBrand(items,"Nikon"), getItemsByAuthor(items,"eBay"));
search();


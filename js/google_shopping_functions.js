//Part 1: Create a function called getItems that simply returns the items array from the google
var getItems = function(productsObject){
    for (var i = 0; i < productsObject.items.length; i++){
      var short_item = productsObject.items;
      //console.log(short_item[i]);
    }
    return short_item;
}

//Part 2: Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function(short_item, brand){
  var short_item_brand = [];
  for (var i = 0; i < short_item.length; i++){
      if (short_item[i].product.brand === brand){
      short_item_brand.push(short_item[i]);
      //console.log(short_item_brand);
    }
  }
  return short_item_brand;
}

//Part 3: Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
var getItemsByAuthor = function(short_item, author){
  var short_item_author = [];
  for (var i = 0; i < short_item.length; i++){
      if (short_item[i].product.author.name.includes(author)){
      short_item_author.push(short_item[i]);
      //console.log(short_item_author);
    }
  }
  return short_item_author;
}

//Part 4: Create function called getAvailableProducts that takes an item array and
//returns an array containing all of the available products (an available product is one with at least one availability of "inStock"
//in the inventories array
var getAvailableProducts = function(short_item){
  var short_item_avail = [];
  for (var i = 0; i <short_item.length; i++){
    for (var j = 0; j< short_item[i].product.inventories.length; j++){
      if (short_item[i].product.inventories[j].availability === "inStock"){
        short_item_avail.push(short_item[i]);
        //console.log(short_item_avail);
      }
    }
  }
  return short_item_avail;
}

//Further:
var getCountry = function(short_item){
  var short_item_country = [];
  var dup_short_item_country = [];
  for (var i = 0; i < short_item.length; i++){
      short_item_country.push(short_item[i].product.country);
      for (var j = 0; j < short_item_country.length; j++){
        if (short_item_country[j] === short_item_country[j + 1]){
          dup_short_item_country = short_item_country[j];
        }
        //else if (short_item_country[j] != short_item_country[j + 1]){
          //dup_short_item_country.push(short_item_country[j]);
        //}
        //unsure how to proceed with the non-duplicates.

      }
  }
  console.log(dup_short_item_country)
}



var getPrice = function(short_item){
  var total_price = 0;
  for (var i = 0; i < short_item.length; i++){
    for (var j=0; j< short_item[i].product.inventories.length; j++){
      total_price = total_price + short_item[i].product.inventories[j].price;
    }
  }
  console.log(total_price);
}

//additional search function: get link of same brand product
var getLink = function(short_item){
  var link = [];
  for (var i =0; i< short_item.length; i++){
    console.log(short_item[i].product.link);
  }
}

















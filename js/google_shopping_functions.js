console.log("...functions.js is up and running!");
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */
//Part 1: items array
var getItems = function(){
  console.log(products.items);
  return(products.items);
}

//Part 2: Here i put both brandName and the array from earlier which has function name of getItems:
var getItemsByBrand = function(array,brandName){
  var brandArr = [];
  //console.log("Just before the loop happens");
  //define the getItems function as a variable just so that it is easier to call and use;
  for (i = 0; i < array.length; i++){
  //console.log("is the for loop happening?");
    if ((array[i].product.brand) == brandName){
    // console.log("Is this push into the array happening?");
      brandArr.push(array[i].product.title);
    }else{
      //do nothing
    }
  }
  console.log("prints out the Brand Array");
  console.log(brandArr);
  //return brandArr;
}

//Part 3:
var getItemsByAuthor = function(array, authorName){
  var authorArr = [];
  for (i = 0; i < array.length; i++){
    if((array[i].product.author.name.includes(authorName))){
      authorArr.push(array[i].product.title);
    }else{
      //do nothing;
    }
  }
  console.log("prints out array of items with an author that matches the user's input");
  console.log(authorArr);
}

//Part 4:
var getAvailableProducts = function(array){
  var inStockArr = [];
  for (i = 0; i< array.length; i++){
    if((array[i].product.inventories[0].availability) === "inStock"){
      inStockArr.push(array[i].product.title);
    }else{
      //do nothing;
    }
  }
  console.log("prints out array of items that are in stock");
  console.log(inStockArr);
}

//Part 5:










// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

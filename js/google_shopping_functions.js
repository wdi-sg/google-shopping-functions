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
/*
//Part 2: get items by brand
var getItemsByBrand = function(brandName){
  var brandArr = [];
  //console.log("Just before the loop happens");
  //define the getItems function as a variable just so that it is easier to call and use;
  var getI = getItems();
  for (i in getI){
  //  console.log("is the for loop happening?");
    if ((getI[i].product.brand) == brandName){
    //  console.log("Is this push into the array happening?");
      brandArr.push(getI[i].product.title);
    }else{
      //do nothing;
    }
  }
  //console.log("prints out the Brand Array");
  console.log(brandArr);
  //return brandArr;
}
//console.log("execute get item by sony brand");
*/
//getItemsByBrand("Sony");
//Part 2.1: Here i put both brandName and the array from earlier which has function name of getItems:
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
//getItemsByBrand(getItems(),"Sony");


//console.log("Test console log for index 0 of the items array");
//console.log(products.items[0]);
//console.log(getItems[0]);
console.log("end");

//Part 3:














// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

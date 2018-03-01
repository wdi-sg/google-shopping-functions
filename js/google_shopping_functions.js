
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

 /*
  * Question 1
  * Function name: getItems(objectData)
  * input: accepts full item data
  * output: returns the items array
  */
 function getItems(objectData){
   return objectData.items;
 }

 /*
 * Question 2
  * Function name: getItemsByBrand(items, brand)
  * input: accepts full item data & brand in string format
  * output: returns the items array which corresponds to the brand
  */
 function getItemsByBrand(items, brand){
   // var itemCount = getItemsCount(products);
   var itemsByBrand = [];
   for (var i=0; i<items.length; i++){
     if (items[i].product.brand === brand){
       itemsByBrand.push(items[i]);
     }
   }
   return itemsByBrand;
 }

 /*
  * Question 3
  * Function name: getItemsByAuthor(items, author)
  * input: accepts full item data & author name in string format
  * output: returns the items array which corresponds to the author name
  */
function getItemsByAuthor(items, author){
  // var itemCount = getItemsCount(products);
  var itemsByAuthor = [];
  for (var i=0; i<items.length; i++){
    if (items[i].product.author.name.includes(author)){
      itemsByAuthor.push(items[i]);
    }
  }
  return itemsByAuthor;
}

 /*
  * Question 4
  * Function name: getAvailableProducts(items)
  * input:
  * output:
  */
 function getAvailableProducts(items){
   // var itemCount = getItemsCount(products);
   var itemsByAvailability = [];
   for (var i=0; i<items.length; i++){
     if (items[i].product.inventories[0].availability === "inStock"){
       itemsByAvailability.push(items[i]);
     }
   }
   return itemsByAvailability;
 }


// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(products));

// Question 1
// console.log(getItems(products));

// Question 2
// getItemsByBrand(getItems(products), "Sony");

// Question 3
// getItemsByAuthor(getItems(products), "pictureline.com");

// Question 4
// getAvailableProducts(getItems(products));

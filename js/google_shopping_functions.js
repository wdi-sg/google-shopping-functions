
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

console.log("HERROOOOOO");
console.log(products);

//  1.) getItems(objectData)

function getItems(objectData) {
  return objectData.items;
}

var productsArray = getItems(products);
console.log(productsArray);


// // 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)

function getItemsByBrand(items,itemBrand) {
  for (i = 0; i < items.length; i ++) {
    if (items[i].product.brand === itemBrand) {
        console.log(items[i].product.title);
      }
    }
  }

getItemsByBrand(productsArray,"Canon");






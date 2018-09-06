
// // /*
// //  * example function called getItemsCount
// //  * input: accepts full item data
// //  * output: returns the length of the items array
// //  */
// // function getItemsCount(itemData) {
// //   return itemData.items.length;
// // }

// // /*
// //  * Define and use your functions here
// //  */

// // // output item count using the getItemsCount function
// // console.log('Item Count: ' + getItemsCount(data));

//q1
function getItems(objectData) {
  return objectData.items;
}
var itemsArray = getItems(products);
console.log(itemsArray);

//q2
function getItemsByBrand(items, brand) {
  var final_arr = [];
  items.forEach(function(item){
    if (item.product.brand.toLowerCase() == brand.toLowerCase()) {
      final_arr.push(item);
    }
  })
  return final_arr;
}

console.log(getItemsByBrand(itemsArray, 'Sony'));
console.log(getItemsByBrand(itemsArray, 'Canon'));
console.log(getItemsByBrand(itemsArray, 'Nikon'));
console.log(getItemsByBrand(itemsArray, 'Panasonic'));

// //q3
// function getItemsByAuthor(items, author) {
//   var final_arr = [];
//   items.forEach(function(item){
//     if (item.product.author.name.toLowerCase() == author.toLowerCase()) {
//       final_arr.push(item);
//     }
//   })
//   return final_arr;
// }
// console.log(getItemsByAuthor(itemsArray, 'Target'));
// console.log(getItemsByAuthor(itemsArray, 'CDW'));
// console.log(getItemsByAuthor(itemsArray, 'eBay'));

// //q4
// function getAvailableProducts(items) {
//   var final_arr = [];
//   items.forEach(function(item){
//     if (item.product.inventories[0].availability == 'inStock') {
//       final_arr.push(item);
//     }
//   })
//   return final_arr;
// }
// console.log(getAvailableProducts(itemsArray));

// // //q5
// console.log(getItemsByBrand(itemsArray, 'Sony'));
// console.log(getItemsByBrand(getAvailableProducts(itemsArray), 'Sony'));
// console.log(getItemsByAuthor(getAvailableProducts(itemsArray), 'Adorama Camera'));
// console.log(getItemsByAuthor(getItemsByBrand(itemsArray, 'Nikon'), 'eBay'));

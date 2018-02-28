
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products));

// 1) Create a function called getItems that simply returns the items array from the google product object.
function getItems(itemData) {
  return itemData.items;
}

`2) Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.`
function getItemsByBrand(items, brand) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['brand'] == brand) res.push(item);
  }
  return res;
}


`3) Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.`
function getItemsByAuthor(items, author) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['author']['name'].includes(author)) res.push(item);
  }
  return res;
}

`4) Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)`
function getAvailableProducts(items) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['inventories'][0]['availability'] == 'inStock') res.push(item);
  }
  return res;
}

// Testing
var items = getItems(products);
// console.log(getItemsByBrand(items, 'Sony'));
// console.log(getItemsByBrand(items, 'Canon'));
// console.log(getItemsByBrand(items, 'Nikon'));
// console.log(getItemsByBrand(items, 'Panasonic'));

// console.log(getItemsByAuthor(items, 'Target'));

// console.log(getAvailableProducts(items));

`5) Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
All items made by Sony.
All items made by Sony that are available.
All available items by the author "Adorama Camera"
All items made by Nikon with the author eBay.`

var sonyItems = getItemsByBrand(items, 'Sony');
console.log(sonyItems);

var availableSonyItems = getAvailableProducts(sonyItems);
console.log(availableSonyItems);

var acItems = getItemsByAuthor(items,"Adorama Camera");
console.log(getAvailableProducts(acItems));

var nikonItems = getItemsByBrand(items, 'Nikon');
console.log(getItemsByAuthor(items,"eBay"));

// bonus question - I created a function that returns the total number of image links on a page
function numImageLinks(items) {
  var count = 0;
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    count += item['product']['images'].length;
  }
  return count;
}

console.log(numImageLinks(items));

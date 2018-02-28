const data = require('../products.js');

// console.log(data);
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

/*---q1---*/
// input: json object
// return: array of items
// Create a function called getItems that simply returns the items array from the google product object.
// Note all other functions(below) use the return of this function as their input.

const getItems = (data) => {
  let dataItems = data.items;
  // console.log(dataItems);
  return dataItems;
}


/*---q2---*/
// input: an array of items, string of brand to filter
// return: array of items of specific brand
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

const items = getItems(data);

const getItemsByBrand = (items, brand) => {
  let brandItemArr = [];
  items.forEach(item => {
    if(item.product.brand.toLowerCase() === brand.toLowerCase()){
      brandItemArr.push(item);
    }
  });
  // console.log(brandItemArr);
  return brandItemArr;
}

// getItemsByBrand(items, 'sony');
// getItemsByBrand(items, 'canon');
// getItemsByBrand(items, 'nikon');
// getItemsByBrand(items, 'panasonic');


/*---q3---*/
// input: an array of items, string of author to filter
// return: array of items of specific author
// Create a function called getItemsByAuthor that takes an item array returns a new array of all items of a specified brand.
// Test this function by searching for Target, CDW, eBay.

const getItemsByAuthor = (items, author) => {
  let authorItemArr = [];
  items.forEach(item => {
    let itemAuthor = item.product.author.name.toLowerCase();
    if(itemAuthor.includes(author.toLowerCase())){
      authorItemArr.push(item);
    }
  });
  // console.log(authorItemArr);
  return authorItemArr;
}

// getItemsByAuthor(items,'ebay');


/*---q4---*/
// input: an array of items
// return: array of items that are available
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products(an available product is one with at least one availability of "inStock" in the inventories array)

const getAvailableProducts = (items) => {
  let availableItemsArr = [];
  items.forEach(item => {
    let availabilityStatus = item.product.inventories[0].availability;
    // console.log(item.product.inventories[0].availability);
    if(availabilityStatus === 'inStock'){
      availableItemsArr.push(item);
    }
  });
  // console.log(availableItemsArr.length);
  return availableItemsArr;
}

// getAvailableProducts(items);

/*---q5---*/
// Use the functions you created in 1 - 4 to ouput(console.log) the following lists of items.
// All items made by Sony.

let sonyItems = getItemsByBrand(items, 'sony');
// console.log(sonyItems);

// All items made by Sony that are available.

let availableSonyItems = getAvailableProducts(sonyItems);
// console.log(availableSonyItems);

// All available items by the author "Adorama Camera"

let itemsAvailableAtADCam = getItemsByAuthor(items, 'Adorama Camera');
// console.log(itemsAvailableAtADCam);

// All items made by Nikon with the author eBay.

let nikonItems = getItemsByBrand(items,'nikon');
let nikonItemsSoldByEbay = getItemsByAuthor(nikonItems, 'eBay');
// console.log(nikonItemsSoldByEbay.length);


/*---bonus---*/
// combine all the search functions above 
const checkAvailabilityItem = (item, brand, author) => {
  let brandItems = getItemsByBrand(item, brand);
  let authorItems = getItemsByAuthor(brandItems, author);
  let itemAvailability = getAvailableProducts(authorItems);
  // console.log(itemAvailability.length);
  return itemAvailability;
}

checkAvailabilityItem(items, 'canon', 'ebay');

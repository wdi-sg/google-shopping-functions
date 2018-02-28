// Utility functions
// 1. clear(): clears the output on the page
// 2. print(text): outputs text to the page
function clear () {
    document.getElementById('output').innerHTML = "";
}

function print (text) {
    document.getElementById('output').innerHTML += text + "<br>";
};

const itemsArray = products.items;
const AVAILABILE_STATUS = 'inStock';

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
function getItems(objectData) {
    return objectData.items;
}

function getItemsByBrand(items,brand) {
    let searchFilter = brand.toLowerCase();
    let result = [];
    items.forEach(item => {if (item.product.brand.toLowerCase().indexOf(searchFilter) >= 0) {
        result.push(item);
    }});
    return result;
}

function getItemsByAuthor(items,author) {
    let searchFilter_Author = author.toLowerCase();
    let result = [];
    items.forEach(item => {if (item.product.author.name.toLowerCase().includes(searchFilter_Author)) {
        result.push(item);
    }});
    return result;
}

function getAvailableProducts(items) {
    let result = [];
    items.forEach(item => {if (item.product.inventories[0].availability == AVAILABILE_STATUS) {
        result.push(item);
    }}); 
    return result;
}


// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));
console.log(getAvailableProducts(getItems(products)));

const itemsSony = getItemsByBrand(getItems(products),"Sony");
const itemsSonyAvailable = getAvailableProducts(itemsSony);
const itemsAdoramaCameraAvailable = getAvailableProducts(getItemsByAuthor(getItems(products),"Adorama Camera"));
const itemsNikonEbay = getItemsByBrand(getItemsByAuthor(getItems(products),"eBay"),"Nikon")

console.log(itemsSony);
console.log(itemsSonyAvailable);
console.log(itemsAdoramaCameraAvailable);
console.log(itemsNikonEbay);
  
  
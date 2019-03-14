const arrOfItems = products.items;

function getItemsCount(itemData) {
  return itemData.items.length;
}
// console.log('Item Count: ' + getItemsCount(products));

 function getItems(objectData){
  return objectData.items;
 }
// console.log('Array: ' + getItems(products));

 function getItemsByBrand(items,brand){
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    let itemBrand = items[i].product.brand.toLowerCase();
    if (itemBrand.includes(brand.toLowerCase()) ) {
      arr.push(items[i]);
    }
  }
  return arr;
 }
 // console.log(getItemsByBrand(arrOfItems,"Canon"))

function getItemsByAuthor(items,author){
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    let itemAuthor = items[i].product.author.name.toLowerCase();
    if (itemAuthor.includes(author.toLowerCase())) {
      arr.push(items[i]);
    }
  }
  return arr;
}
// console.log(getItemsByAuthor(arrOfItems,"eBay"));

function getAvailableProducts(items){
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    let availablity = items[i].product.inventories[0].availability;
    if (availablity === "inStock" ) {
      arr.push(items[i]);
    }
  }
  return arr;
}
//console.log(getAvailableProducts(arrOfItems));

//Part 5
const sonyProducts = getItemsByBrand(arrOfItems,"Sony");
// console.log(sonyProducts);

const availableSonyProducts = getAvailableProducts(sonyProducts);
// console.log(availableSonyProducts);

const adoramaCam = getItemsByAuthor(arrOfItems,"Adorama Camera");
// console.log(adoramaCam);

const nikonProducts = getItemsByBrand(arrOfItems,"Nikon");
const nikonByEbay   = getItemsByAuthor(nikonProducts,"eBay");
// console.log(nikonByEbay);

// Part 6 and 7
// Create a func() that check if result(s) were found
// Console.log the arr if there were result(s)
function checkResult(arr){
  if (arr.length === 0) {
    alert("No Results Found");
  } else {
    console.log(arr)
  }
}

// const searchTerm = prompt("Please enter one of the following to Search \n 1 - Search by Brand \n 2 - Search by Author");
// if (searchTerm == "1" ) {
//   let input = prompt("Enter the Brand");
//   const arr = getItemsByBrand(arrOfItems,input);
//   checkResult(arr);
// } else if (searchTerm == "2" ) {
//   let input = prompt("Enter the Author");
//   const arr = getItemsByAuthor(arrOfItems,input);
//   checkResult(arr);
// } else {
//   alert('No Results were found');
// }

//Part 9 and 10
const minPrice = Number(prompt("Enter your Minimum Price"));
const maxPrice = Number(prompt("Enter your Maximum Price"));
//Trying out different Syntax
const filterPrice = (arr,minPrice,maxPrice) => {
  const array = [];
  for (var i = 0; i < arr.length; i++) {
  let price = arr[i].product.inventories[0].price;
  if (minPrice < price && price < maxPrice) {
    console.log(price,minPrice,maxPrice);
    array.push(arrOfItems[i])
  }
} return array;
}

console.log(filterPrice(arrOfItems,minPrice,maxPrice));










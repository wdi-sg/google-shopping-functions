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
    let available = items[i].product.inventories[0].availability;
    if (available === "inStock" ) {
      arr.push(items[i]);
    }
  }
  return arr;
}
// console.log(getAvailableProducts(arrOfItems));

//Part 5
const sonyProducts = getItemsByBrand(arrOfItems,"Sony");
// console.log(sonyProducts);

const availableSonyProducts = getAvailableProducts(sonyProducts);
// console.log(availableSonyProducts);

const adoramaCam = getItemsByAuthor(arrOfItems,"Adorama Camera");
// console.log(adoramaCam);

const nikonProducts = getItemsByBrand(arrOfItems,"Nikon");
const nikonByEbay   = getItemsByAuthor(nikonProducts,"eBay");
console.log(nikonByEbay);




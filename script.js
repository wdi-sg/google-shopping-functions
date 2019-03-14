
let itemArray = getItem(products);
//Q1
console.log(itemArray);


let brandArray = getItemsByBrand(itemArray, "Canon");
//Q2
console.log(brandArray);


let authorArray = getItemsByAuthor(itemArray, "eBay");
//Q3
console.log(authorArray);


let availableArray = getAvailableProducts(itemArray);
//Q4
console.log(availableArray);


let sonyArray = getItemsByBrand(itemArray, "Sony");
//Q5.a
console.log(sonyArray);


let sonyInStockArray = getAvailableProducts(sonyArray);
//Q5.b
console.log(sonyInStockArray);

let adoramaArray = getAvailableProducts(itemArray);
let adoramaInStockArray = getItemsByAuthor(adoramaArray, "Adorama Camera");
//Q5.c
console.log(adoramaInStockArray);


let nikonArray = getItemsByBrand(itemArray, "Nikon");
let nikonEbayArray = getItemsByAuthor(nikonArray, "eBay");
//Q5.d
console.log(nikonEbayArray);


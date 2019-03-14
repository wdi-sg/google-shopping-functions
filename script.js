// console.log(getItems());

// console.log(getItemsByBrand(getItems(),"canon"));

// console.log(getItemsByAuthor(getItems(),"Overstockdigital"));

// console.log(getAvailableProducts(getItems()));

/* Use your functions */

// // 1. All items made by Sony.
var sony = getItemsByBrand(getItems(),"Sony");
console.log(sony);

// 2. All items made by Sony that are available.

var sonyAvailable = [];
getAvailableProducts(getItems());

for (var i = 0; i < availableProducts.length; i++) {
  if (availProductsDetails[i]["product"]["brand"] === "Sony") {
    sonyAvailable.push(availProductsDetails[i]["product"]["title"]);
    console.log("This item is made by Sony, and is available: " + availProductsDetails[i]["product"]["title"]);
  }
}

console.log("Summary: " + sonyAvailable);

// 3. All available items by the author "Adorama Camera"

var adoramaAvailable = [];
var adorama = getItemsByAuthor(getItems(),"Adorama Camera");

for (var i = 0; i < availableProducts.length; i++) {
  if (availProductsDetails[i]["product"]["author"]["name"] === "Adorama Camera") {
    adoramaAvailable.push(availProductsDetails[i]["product"]["title"]);
    console.log("This item is by Adorama Camera, and is available: " + availProductsDetails[i]["product"]["title"]);
  }
}

console.log(adoramaAvailable);

// 4. All items made by Nikon with the author eBay.

// var nikonEbay = [];
// var nikon = getItemsByBrand(getItems(),"nikon");
// var ebay = getItemsByAuthor(getItems(),"ebay");

// compare(nikon,ebay);
// console.log(result + "hi");


// for (var i = 0; i < brandItems2.length; i++) {
//   for(var j = 0; j < available.length; j++ ) {
//     if(brandItems2[i] === available[j]) {
//       adoramaAvailable.push(products["items"][i]["product"]["title"]);
//     }
//   }
// }




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

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

var photo = function(product) {
for (i=0; i<products.items.length; i++) {
  if (product==="canon") {
    if (products.items[i].product.brand === "Canon") {
    var print = products.items[i].product.title;
    console.log(print);
  };
};
};
};
photo("canon")

//Canon Avilability Function//
var photo_avail = function(available) {
for (i=0; i<products.items.length; i++) {
  if (available==="canon") {
  if ((products.items[i].product.brand === "Canon") && (products.items[i].product.inventories[0].availability === 'inStock')){
    var print = products.items[i].product.title;
    console.log(print);
  };
};
};
};
photo_avail("canon")

//Adorama Function//
var camera_avail = function(camera) {
for (i=0; i<products.items.length; i++) {
  if (camera==="Adorama") {
  if ((products.items[i].product.author.name === ("Adorama Camera")) && (products.items[i].product.inventories[0].availability === 'inStock')){
    var print = products.items[i].product.title;
    console.log(print);
  };
};
};
};

camera_avail("Adorama");

// Nikon Function//
var x = function(brand) {
  for (i=0; i<products.items.length; i++) {
    if (brand = "Nikon") {
 if ((products.items[i].product.brand === "Nikon") && (products.items[i].product.author.name.includes("eBay"))) {
   var print = products.items[i].product.title;
   console.log(print);
 };
};
};
};

x("Nikon");




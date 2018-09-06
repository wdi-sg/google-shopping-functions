/*
All items made by Sony.

All items made by Sony that are available.

All available items by the author "Adorama Camera"

All items made by Nikon with the author eBay.

*/
var itemSony = getItemsByBrand(getItems(products),"Sony")
console.log(itemSony)

var itemSony = getItemsByBrand(getItems(products),"Sony")
var itemSonyAvailable = getAvailableProducts(itemSony)
console.log(itemSonyAvailable)

var itemAdorama = getItemsByAuthor(getItems(products),"Adorama Camera")
var itemAdoramaAvailable = getAvailableProducts(itemAdorama)
console.log(itemAdoramaAvailable)

var itemNikon = getItemsByBrand(getItems(products),"Nikon")
var itemNikonEbay = getItemsByAuthor(itemAdorama,"eBay")
console.log(itemNikonEbay)
















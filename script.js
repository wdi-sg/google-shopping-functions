
// var itemSony = getItemsByBrand(getItems(products),"Sony")
// console.log(itemSony)

// var itemSony = getItemsByBrand(getItems(products),"Sony")
// var itemSonyAvailable = getAvailableProducts(itemSony)
// console.log(itemSonyAvailable)

// var itemAdorama = getItemsByAuthor(getItems(products),"Adorama Camera")
// var itemAdoramaAvailable = getAvailableProducts(itemAdorama)
// console.log(itemAdoramaAvailable)

// var itemNikon = getItemsByBrand(getItems(products),"Nikon")
// var itemNikonEbay = getItemsByAuthor(itemAdorama,"eBay")
// console.log(itemNikonEbay)

var actualSearch =prompt("Enter 1 for number 2 for country and 3 for total")


if (actualSearch === "1"){
  console.log(getItems(products))
}
else if(actualSearch === "2"){
  console.log(getItemsByCountry(products))
}
else if(actualSearch === "3"){
  console.log(getTotalPrice(products))
}
else{console.log("Invalid Entry : Please Enter 1 for number 2 for country and 3 for total")
}





















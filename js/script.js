var itemsArray = getItems(products);
//////////////////////////    CALLING OF FUNCTIONS    //////////////////////
// Call getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//console.log(getItemsByBrand(itemsArray, "Canon"));

// Call getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
//console.log(getItemsByAuthor(itemsArray, "Target"));
//getItemsByAuthor(itemsArray, "Target");

// Call getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
//console.log(getAvailableProducts(itemsArray));

////////////////////  END OF CALLING OF FUNCTIONS  //////////////////////////////

///////////////////////   USE YOUR FUNCTIONS   ////////////////////////////////
// All items made by Sony.
var itemsBySony = getItemsByBrand(itemsArray, "Sony");
//console.log(itemsBySony);


// All items made by Sony that are available.
var availSony = getAvailableProducts(itemsBySony);
//console.log(availSony);


// All available items by the author "Adorama Camera"
var adorama = getItemsByAuthor(itemsArray, "eBay");
var availAdorama = getAvailableProducts(adorama)
if (availAdorama.length === 0) {
  //console.log("No stock.")
} else {
  //console.log(availAdorama)
}


// All items made by Nikon with the author eBay.
var itemsByNikon = getItemsByBrand(itemsArray, "Nikon");
var nikonByEbay = getItemsByAuthor(itemsByNikon, "eBay");
if (nikonByEbay.length === 0) {
  //console.log("Invalid item.")
} else {
  //console.log(nikonByEbay)
}

////////////////////////////  END OF USE YOUR FUNCTIONS EXERCISE  //////////////////////////////


///////////////////////////////  FURTHER EXERCISE  /////////////////////////
// Prompt the user for the search term they are looking for.
var choice = Number(prompt("Enter 1 for Number of Products \nEnter 2 for Country of each Item \nEnter 3\nEnter 4 for  for Total Price of Inventory \nEnter 4 to Search for Items" ))
if (choice === 1) {
  console.log("Items count: " + itemsArray.length);
} else if (choice === 2) {
  console.log(getItemCountry(itemsArray));

} else if (choice === 3) {
  console.log("Total price: " + totalInventoryPrice(itemsArray));

} else if (choice === 4) {
  searchChoice = Number(prompt("Enter 1 to Search by Brand \nEnter 2 to Search by Author \nEnter 3 to Search with Max and Min price range"))

    if (searchChoice === 1) {
      var brand = prompt("Enter brand")
      var capBrand = brand.charAt(0).toUpperCase() + brand.slice(1)  // to auto capitalise the word
      console.log(getItemsByBrand(itemsArray, capBrand));

    } else if (searchChoice === 2) {
      var author = prompt("Enter author name");
      console.log(getItemsByAuthor(itemsArray, author));
    }

    else if (searchChoice === 3) {
      var max = Number(prompt("Enter max price"));
      var min = Number(prompt("Enter min price")) ;
      console.log(getItemsAccToRange(max, min));
    }
  }

  ///////////////////  END OF FURTHER   /////////////////////////////////




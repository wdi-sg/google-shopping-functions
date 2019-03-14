console.log("Script.js is up and running!");

getItems();
console.log("Part 1: Get Items is done");


//Part 2:
console.log("Calling Get Items by brands from the script page");
getItemsByBrand(getItems(),"Sony");
getItemsByBrand(getItems(),"Canon");
getItemsByBrand(getItems(),"Nikon");
getItemsByBrand(getItems(),"Panasonic");
console.log("End call get items by brands from the script page");


//Part 3: Printing out an array of items that include these words in the author name: Target, CDW, eBay;
console.log("Calling all items with author name Target");
getItemsByAuthor(getItems(),"Target");
console.log("Calling all items with author name CDW");
getItemsByAuthor(getItems(),"CDW");
console.log("Calling all items with author name eBay");
getItemsByAuthor(getItems(),"eBay");

//Part 4: Printing out an array of items that are in stock
console.log("Calling all items that are in stock");
getAvailableProducts(getItems());

//Part 5, All itesms made by Sony:
console.log("Calling all items made by Sony");
console.log(getSonyItems);

//Part 5, All items made by Sony that are available:
console.log("Calling all items made by Sony that are in stock");
console.log(getSonyItemsInStock);

//Part 5, All items with author name "Adorama Camera" that are available:
console.log("Calling all items with author name Adorama and are in stock");
console.log(getAdoramaItemsInStock);

//Part 5, All items with author name "eBay", brand name of Nikon;
console.log("Calling all items with author name eBay and made by Nikon");
console.log(getItemsNikonFromEbay);

console.log('end of basic requirements');

console.log('Begin further requirements here');
//Further part 1: Prompt the user for the search term they are looking for.
var searchTerm = prompt("Hi! What are you searching for? 'brand', 'author' or 'availability'?");
if (searchTerm == "brand"){
    searchBrand = prompt("What brand are you looking for?");
    if(searchBrand == "Sony" || "Lytro" || "Nikon" || "Canon" ||"Panasonic" ||"Samsung"){
      getItemsByBrand(getItems(),searchBrand);
    }else{
      console.log("Sorry, we do not carry this brand.");
    }
}else if(searchTerm == "author"){

}else if(searchTerm == "availability"){

}
  }
}

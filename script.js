console.log("Script.js is up and running!");

getItems();
console.log("Part 1: Get Items is done");


//Part 2:
console.log("Executing Get Items by brands from the script page");
getItemsByBrand(getItems(),"Sony");
getItemsByBrand(getItems(),"Canon");
getItemsByBrand(getItems(),"Nikon");
getItemsByBrand(getItems(),"Panasonic");
console.log("End executing get items by brands from the script page");


//Part 3: Printing out an array of items that include these words in the author name: Target, CDW, eBay;
getItemsByAuthor(getItems(),"Target");
getItemsByAuthor(getItems(),"CDW");
getItemsByAuthor(getItems(),"eBay");

//Part 4: Printing out an array of items that are in stock
getAvailableProducts(getItems());

//Part 5: 


console.log('end');

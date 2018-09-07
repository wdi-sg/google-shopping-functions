
//Part 1: Create a function called getItems that simply returns the items array from the google product object.
var short_item = getItems(products);

//Part 2: Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
console.log("---------------------------------------------------------------------");
//getItemsByBrand(short_item, "Nikon");

//Part 3: Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
console.log("---------------------------------------------------------------------");
//getItemsByAuthor(short_item, "CDW");


//Part 4: Create function called getAvailableProducts that takes an item array and
//returns an array containing all of the available products (an available product is one with at least one availability of "inStock"
//in the inventories array
console.log("---------------------------------------------------------------------");
//getAvailableProducts(short_item);

//Part 5: Using the functions
console.log("Print all items made by Sony");
//All items made by Sony.
//console.log(getItemsByBrand(short_item, "Sony"));

console.log("Print all items made by Sony and is available (in stock)");
//All items made by Sony that are available.
//console.log(getItemsByBrand(getAvailableProducts(short_item), "Sony"));
console.log("Print all available items by author Adorama Camera");

//All available items by the author "Adorama Camera" //Should be empty array cause no results.
//console.log(getItemsByAuthor(getAvailableProducts(short_item), "Adorama Camera"));

console.log("Print all items made by Nikon with author eBay");
//All items made by Nikon with the author eBay.
//console.log(getItemsByAuthor(getItemsByBrand(short_item, "Nikon"), "eBay"));

//Further:
//Ask the user which one they want to search: Number = number of products item, Country = country of each item, Price = total price of all inventory.

var searchTerm = prompt("Please insert what you are searching for: (Number, Country, Price) ");
var searchTerm_lowercase = searchTerm.toLowerCase();
if (searchTerm_lowercase === "number"){
  console.log(short_item.length);
}
else if (searchTerm_lowercase === "country"){
  getCountry(short_item);
}
else if (searchTerm_lowercase === "price"){
  getPrice(short_item);
}
else {
  console.log("No results found!");
}

//Using additional function:
//getLink(getItemsByBrand(short_item, "Sony"));











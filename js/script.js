// First part
console.log(items);

// Second part
console.log(getItemsByBrand(items, 'Nikon'))

// Third part
console.log(getItemsByAuthor(items, 'eBay'));

// Fourth part
console.log(getAvailableProducts(items));

// Fifth part
console.log(getItemsByBrand(items, 'Sony'));
console.log(getAvailableProducts(getItemsByBrand(items, 'Sony')));
console.log(getAvailableProducts(getItemsByAuthor(items, 'Adorama Camera')));
console.log(getItemsByBrand(getItemsByAuthor(items,'eBay'), 'Nikon'));



var searchTerm = prompt("What would you like to search by: Brand, Author or Availability?");

if (searchTerm === "Brand") {
  var userBrand = prompt("Search for brand: Nikon, Sony, Canon or Panasonic");
  var searchBrand = getItemsByBrand(items, userBrand);
  console.log(searchBrand);
  if (searchBrand < 1) {
    alert("Sorry, no products were found!");
  }
} else if (searchTerm === "Author") {
  var userAuthor = prompt("Search for author: Target, CDW or eBay");
  var searchAuthor = getItemsByAuthor(items, userAuthor);
  console.log(searchAuthor);
  if (searchBrand < 1) {
    alert("Sorry, no products were found!");
  }
} else if (searchTerm === "Availability") {
  console.log(getAvailableProducts(items));
}

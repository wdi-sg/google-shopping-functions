var items = getItems(products);
var searchBrands = ['Sony', 'Canon', 'Nikon', 'Panasonic'];
var searchAuthors = ['Target', 'CDW', 'eBay'];
var searchCat;
var searchString, userPrompt, userPref;
var availableItems = getAvailableProducts(items);
/*
console.log('This is the test for getItems(objectData)');
console.log(items);

console.log('');
console.log('This is the test for getItemsByBrand(items, brand)');
for (i in searchBrands)
  console.log(getItemsByBrand(items, searchBrands[i]));

console.log('Search term = Nokia : ' + getItemsByBrand(items, 'Nokia'));

console.log('');
console.log('This is the test for getItemsByAuthor(items,author)');
for (i in searchAuthors)
  console.log(getItemsByAuthor(items, searchAuthors[i]));

console.log('');
console.log('This is the test for getAvailableProducts(items)');
console.log(getAvailableProducts(items));

console.log('');
console.log('1. All items made by Sony:');
console.log(getItemsByBrand(items, 'Sony'));

console.log('');
console.log('2. All items made by Sony that are available:');
console.log(getItemsByBrand(getAvailableProducts(getItems(products)), 'Sony'));

console.log('');
console.log('3. All available items by the author “Adorama Camera":');
console.log(getItemsByAuthor(availableItems, 'Adorama Camera'));

console.log('');
console.log('4. All items made by Nikon with the author eBay:');
console.log(getItemsByAuthor(getItemsByBrand(items, 'Nikon'), 'eBay'));
*/

//further 1
console.log('');
console.log('User Search Results:');
userPrompt = prompt('Please enter a search category:', 'Availability, Author, Brand').toLowerCase();
searchCat = ['availability', 'author', 'brand'];
if (userPrompt === searchCat[0])
  console.log(getAvailableProducts(items));
else if (userPrompt === searchCat[1]) {
  userPref = prompt("Enter the author's name:");
  console.log(getItemsByAuthor(items, userPref));
} else if (userPrompt === searchCat[2]) {
  userPref = prompt("Enter the brand's name:");
  console.log(getItemsByBrand(items, userPref));
} else
  console.log('Invalid input.')

//function testing
console.log(getItemsCount(products));
console.log(getItemsCountry(items));
console.log(getTotalPrice(items));

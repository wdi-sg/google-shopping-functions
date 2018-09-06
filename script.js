var items = getItems(products);
var searchBrands = ['Sony', 'Canon', 'Nikon', 'Panasonic'];
var searchAuthors = ['Target', 'CDW', 'eBay'];
var searchString;
var availableItems = getAvailableProducts(items);

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
console.log(getItemsByBrand(items,'Sony'));

console.log('');
console.log('2. All items made by Sony that are available:');
console.log(getItemsByBrand(availableItems,'Sony'));

console.log('');
console.log('3. All available items by the author “Adorama Camera":');
console.log(getItemsByAuthor(availableItems,'Adorama Camera'));

console.log('');
console.log('4. All items made by Nikon with the author eBay:');
console.log(getItemsByAuthor(getItemsByBrand(items, 'Nikon'),'eBay'));

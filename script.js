var items = getItems(products);
var searchBrands = ['Sony', 'Canon', 'Nikon', 'Panasonic'];
var searchAuthors = ['Target', 'CDW', 'eBay'];

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

var items = getItems(products);
var searchBrands = ['Sony', 'Canon', 'Nikon', 'Panasonic'];
var searchAuthors = ['Target', 'CDW', 'eBay'];
var searchString, userPrompt, userPref;
var availableItems = getAvailableProducts(items);
var question, options;

// console.log('This is the test for getItems(objectData)');
// console.log(items);
//
// console.log('');
// console.log('This is the test for getItemsByBrand(items, brand)');
// for (i in searchBrands)
//   console.log(getItemsByBrand(items, searchBrands[i]));
//
// console.log('Search term = Nokia : ' + getItemsByBrand(items, 'Nokia'));
//
// console.log('');
// console.log('This is the test for getItemsByAuthor(items,author)');
// for (i in searchAuthors)
//   console.log(getItemsByAuthor(items, searchAuthors[i]));
//
// console.log('');
// console.log('This is the test for getAvailableProducts(items)');
// console.log(getAvailableProducts(items));
//
// console.log('');
// console.log('1. All items made by Sony:');
// console.log(getItemsByBrand(items, 'Sony'));
//
// console.log('');
// console.log('2. All items made by Sony that are available:');
// console.log(getItemsByBrand(getAvailableProducts(getItems(products)), 'Sony'));
//
// console.log('');
// console.log('3. All available items by the author “Adorama Camera":');
// console.log(getItemsByAuthor(availableItems, 'Adorama Camera'));
//
// console.log('');
// console.log('4. All items made by Nikon with the author eBay:');
// console.log(getItemsByAuthor(getItemsByBrand(items, 'Nikon'), 'eBay'));

//FURTHER
console.log('');
console.log('User Search Results:');
question = 'Please enter an option: \n';
options = '1. Show item availability \n2. Search author name\n3. Search item brand\n4. Show total item count\n5. Show item countries\n6. Show total price';
userPrompt = parseInt(prompt(question + options, '1, 2, 3, 4, 5, 6'));

switch (userPrompt) {
  case 1:
    console.log(getAvailableProducts(items));
    break;
  case 2:
    userPref = prompt("Enter the author's name:");
    console.log(getItemsByAuthor(items, userPref));
    break;
  case 3:
    userPref = prompt("Enter the brand's name:");
    console.log(getItemsByBrand(items, userPref));
    break
  case 4:
    console.log(getItemsCount(products));
    break;
  case 5:
    console.log(getItemsCountry(items));
    break;
  case 6:
    console.log(getTotalPrice(items));
    break;
  default:
    console.log('Invalid input.')

}

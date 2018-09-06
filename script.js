/**
 * This program demonstrates how to use functions to access JSON object.
 * @author Liang Xin Chloe
 */

var items = getItems(products);
var choice;
var searchValue;

console.log('All Sony products:')
console.log(getItemsByBrand(items, 'Sony'));

console.log('All Canon products:');
console.log(getItemsByBrand(items, 'Canon'));

console.log('All Nikon products:');
console.log(getItemsByBrand(items, 'Nikon'));

console.log('All Panasonic products:');
console.log(getItemsByBrand(items, 'Panasonic'));

console.log('All products from Target:');
console.log(getItemsByAuthor(items, 'Target'));

console.log('All products from CDW');
console.log(getItemsByAuthor(items, 'CDW'));

console.log('All products from eBay');
console.log(getItemsByAuthor(items, 'eBay'));

console.log('All new products:');
console.log(getItemsByCondition(items, 'new'));

console.log('Get all available products:');
console.log(getAvailableProducts(items));

console.log('All items made by Sony that are available');
console.log(getAvailableProducts(
  getItemsByBrand(items, 'Sony')
));

console.log('All available items by the author "Adorama Camera"');
console.log(getAvailableProducts(
  getItemsByAuthor(items, 'Adorama Camera')
));

console.log('All items made by Nikon with the author eBay');
console.log(getItemsByAuthor(
  getItemsByBrand(items, 'Nikon'),
  'eBay'
));

choice = prompt('Please enter a choice:\n' +
  '[1] The number of product items\n' +
  '[2] The country of each item\n' +
  '[3] Total price of all inventory\n' +
  '[4] Choose a search term.'
);

if (choice) {
  printResultOf(choice);
}

/**
 * Print the result of what user want to do.
 * @param {string} choice - The choice user entered.
 */
function printResultOf(choice) {
  if (choice === '1') {
    console.log('The number of product items:');
    console.log(getItemsCount(items));
  } else if (choice === '2') {
    console.log('The country of each item:');
    console.log(getCountriesOf(items));
  } else if (choice === '3') {
    console.log('Total price of all inventory:');
    console.log(getTotalPrice(items));
  } else if (choice === '4') {
    choice = prompt('Please choose the search term:\n' +
      '[1] brand\n' +
      '[2] author\n' +
      '[3] availability\n' +
      '[4] condition'
    );

    if (choice) {
      printSearchResultOf(choice);
    }
  } else {
    console.log('Invalid choice. Please try again.');
  }
}

/**
 * Print the search result of a specified search term.
 * @param {string} choice - The choice user entered.
 */
function printSearchResultOf(choice) {
  if (choice === '1') {
    searchValue = prompt('Please enter a brand name:');
    searchValue.toLowerCase();
    console.log(getItemsByBrand(items, searchValue));
  } else if (choice === '2') {
    searchValue = prompt('Please enter an author name:');
    searchValue.toLowerCase();
    console.log(getItemsByAuthor(items, searchValue));
  } else if (choice === '3') {
    searchValue = prompt('Do you want to see only available items? (y/n)');
    searchValue.toLowerCase();

    if (searchValue === 'y') {
      console.log(getAvailableProducts(items));
    } else {
      console.log(items);
    }
  } else if (choice === '4') {
    searchValue = prompt('Which condition are you interested in? (new/used)');
    searchValue.toLowerCase();
    console.log(getItemsByCondition(items, searchValue));
  } else {
    console.log('Invalid choice. Please try again.');
  }
}

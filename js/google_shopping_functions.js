/**
 * Get the items from the Google product object.
 * @param {Object} objectData - JSON object of products.
 * @return {Object[]} - An array of items.
 */
function getItems(objectData) {
  return objectData.items;
}

/**
 * Get all items of a specified brand.
 * @param {Object[]} items - An array of items.
 * @param {string} brand - A brand to filter with.
 * @return {(Object[]|string)} - An array of items of a specified brand, or
 *                               a message if no results were found.
 */
function getItemsByBrand(items, brand) {
  var result = [];
  var i;
  var productBrand;

  brand = brand.toLowerCase();

  for (i = 0; i < items.length; i++) {
    productBrand = items[i].product.brand.toLowerCase();

    if (productBrand === brand) {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

/**
 * Get all items by a specified author.
 * @param {Object[]} items - An array of items.
 * @param {string} author - An author to filter with.
 * @return {(Object[]|string)} - An array of items by a specified author, or
 *                               a message if no results were found.
 */
function getItemsByAuthor(items, author) {
  var result = [];
  var i;
  var productAuthor;

  author = author.toLowerCase();

  for (i = 0; i < items.length; i++) {
    productAuthor = items[i].product.author.name.toLowerCase();

    if (productAuthor.indexOf(author) !== -1) {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

/**
 * Get all items by a specified condition.
 * @param {Object[]} items - An array of items.
 * @param {string} condition - A condition to filter with (new/used).
 * @return {(Object[]|string)} - An array of items of a specified condition, or
 *                               a message if no results were found.
 */
function getItemsByCondition(items, condition) {
  var result = [];
  var i;
  var productCondition;

  for (i = 0; i < items.length; i++) {
    productCondition = items[i].product.condition.toLowerCase();

    if (productCondition === condition) {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

/**
 * Get all available (inStock) products.
 * @param {Object[]} items - An array of items.
 * @return {Object[]|string} - An array of all available items, or
 *                             a message if no results were found.
 */
function getAvailableProducts(items) {
  var result = [];
  var i;
  var availability;

  for (i = 0; i < items.length; i++) {
    availability = items[i].product.inventories[0].availability;

    if (availability === 'inStock') {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

/**
 * Get the number of product items.
 * @param {Object[]} items - An array of items.
 * @return {number} - The number of items.
 */
function getItemsCount(items) {
  return items.length;
}

/**
 * Get the country of each item.
 * @param {Object[]} items - An array of items.
 * @return {string[]} - The country of each item.
 */
function getCountriesOf(items) {
  var countries = [];
  var i;
  var country;

  for (i = 0; i < items.length; i++) {
    country = items[i].product.country;
    countries.push(country);
  }

  return countries;
}

/**
 * Get the total price of all inventories.
 * @param {Object[]} items - An array of items.
 * @return {number} - The total price of all inventories.
 */
function getTotalPrice(items) {
  var totalPrice = 0;
  var i;
  var price;

  for (i = 0; i < items.length; i++) {
    price = items[i].product.inventories[0].price;
    totalPrice += price;
  }

  return totalPrice.toFixed(2);
}

/**
 * Validate and get the search result.
 * @param {Object[]} result - The product items after filtering.
 * @return {(Object[]|string)} - An array of filtered product items, or
 *                               a message if no results were found.
 */
function getResult(result) {
  if (result.length) {
    return result;
  } else {
    return 'Sorry, nothing found.';
  }
}

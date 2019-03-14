
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

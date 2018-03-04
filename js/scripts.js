//Q5
console.log(getItemsByBrand(allItems,"Sony"));

console.log(getAvailableProducts(getItemsByBrand(allItems,"Sony")));

console.log(getAvailableProducts(getItemsByAuthor(allItems,"Adorama Camera")));

console.log(getItemsByBrand(getItemsByAuthor(allItems,"eBay"),"Nikon"));
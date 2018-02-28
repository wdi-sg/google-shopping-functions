const data = products;

function getItemsCount() {
  return data.length;
}

// GET ITEMS //
getItems = (objectData) => {
	return objectData.items
}

const items = getItems(data);

// GET ITEMS By BRAND //
getItemsByBrand = (items, brand) => {
	let brandItems = [];
	for(i=0; i<items.length; i++) {
		if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
			brandItems.push(items[i]);
		}
	}
	return brandItems
};
// console.log(getItemsByBrand(items, "canon"));
// console.log(getItemsByBrand(items, "sony"));
// console.log(getItemsByBrand(items, "nikon"));
// console.log(getItemsByBrand(items, "panasonic"));

// GET ITEMS BY AUTHOR
 getItemsByAuthor = (items, author) => {
 	let authorItems = [];
 	for(i=0; i<items.length; i++) {
 		// console.log(items[i].product.author.name.toLowerCase().includes(author));
		if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
			authorItems.push(items[i]);
		}
	}
	return authorItems
 };
// console.log(getItemsByAuthor(items, "cdw"));
// console.log(getItemsByAuthor(items, "target"));
// console.log(getItemsByAuthor(items, "ebay"));

// GET AVAILABLE PRODUCTS
getAvailableProducts = (items) => {
	let availableItems = [];
	for(i=0; i<items.length; i++) {
		const inventories = items[i].product.inventories;
		for(j=0; j<inventories.length; j++) {
			if (inventories[0].availability === "inStock") {
				availableItems.push(items[i]);
			}
		}
	}
	return availableItems;
};

// console.log(getAvailableProducts(items));

const sonyItems = getItemsByBrand(items, 'sony');
console.log("sony", sonyItems);

const sonyAvailable = getAvailableProducts(sonyItems);
console.log("sony + available", sonyAvailable);

const authorAvailable = getItemsByAuthor(getAvailableProducts(items), "Adorama Camera");
console.log("available items by Adorama Camera", authorAvailable);

const nikonEbay = getItemsByBrand(getItemsByAuthor(items, "eBay"), "Nikon");
console.log("nikon + ebay", nikonEbay);



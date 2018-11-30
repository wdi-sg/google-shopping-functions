let allItems = [];
let totalBrands = [];
const resultContainer = document.getElementById("result-container");

const userQuery = {
  brand: [], //string-array
  price: {
    minPrice: null, //num
    maxPrice: null, //num
  },
  availability: null, //boolean
};
let userQueriedProducts = [];

// value =elem  index= elem's index self=filter's array
const onlyUnique = (unfilteredBrandX, unfilteredBrandXIndex, totalBrands) => { // obtained from internet, remember to revirew
  return totalBrands.indexOf(unfilteredBrandX) === unfilteredBrandXIndex;
}; // indexOf only return index of FIRST match, rest matches ignored

const getItemsAndBrands = () => {
  for (let i = 0; i < products.items.length; i++) {
    allItems.push(products.items[i].product);
    totalBrands.push(products.items[i].product.brand);
  };
  totalBrands = totalBrands.filter(onlyUnique);
};

const filterItemsByBrands = (items, brands) => {
  for (let item of items) {
    for (let brand of brands) {
      if (brand === item.brand) {
        userQueriedProducts.push(item)
      }
    }
  }
};

const getUserQuery = () => {
  for (let i = 0; i < totalBrands.length; i++) {
    if (document.getElementById(`check${totalBrands[i]}`).checked) {
      userQuery.brand.push(totalBrands[i]);
    }
  };
  if (document.getElementById("checkAvailable").checked) {
    userQuery.availability = true;
  } else {
    userQuery.availability = false;
  }
  userQuery.price.minPrice = document.getElementById("minPrice").value;
  userQuery.price.maxPrice = document.getElementById("maxPrice").value;
};

const queryAction = () => {
  filterItemsByBrands(allItems, userQuery.brand);
}

const resetQuery = () => {
  userQuery.brand = [];
  allItems = [];
  userQueriedProducts = [];
  while (resultContainer.hasChildNodes()) {
    resultContainer.removeChild(resultContainer.lastChild);
  }
}

const showQueryResult = () => {
  for (i = 0; i < userQueriedProducts.length; i++) {
    let queryResult = document.createElement("div");
    queryResult.className = "result";
    let queryResultNode = document.createTextNode(`${userQueriedProducts[i].title} `);
    queryResult.appendChild(queryResultNode);
    resultContainer.appendChild(queryResult);
  }
}

const runQuery = () => {
  resetQuery();
  getItemsAndBrands();
  getUserQuery();
  queryAction();
  showQueryResult();
  console.log(userQueriedProducts);
}

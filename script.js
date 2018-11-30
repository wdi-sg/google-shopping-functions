let itemsALL = [];
let totalBrands = [];

let userQuery = {
  brand: [], //string-array
  price: {
    minPrice: null, //num
    maxPrice: null, //num
  },
  availability: null, //boolean
};
let userQueriedProducts = [];



const getItems = () => {
  for (let i = 0; i < products.items.length; i++) {
    itemsALL.push(products.items[i].product);
  };
};

const getItemsByBrand = (selectedItems, brand) => {
  for (let i = 0; i < selectedItems.length; i++) {
    if (brand === selectedItems[i].brand) {
      userQueriedProducts.push(selectedItems[i]);
    }
  };
};

const onlyUnique = (value, index, self) => { // obtained from internet, remember to revirew
  return self.indexOf(value) === index;
};

const getBrands = () => {
  for (let i = 0; i < products.items.length; i++) {
    totalBrands.push(products.items[i].product.brand);

  };
  totalBrands = totalBrands.filter(onlyUnique);
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
  for (let j = 0; j < userQuery.brand.length; j++) {
    getItemsByBrand(itemsALL, userQuery.brand[j]);

  }
}

const resetQuery = () => {
  userQuery.brand = [];
  itemsALL = [];
  userQueriedProducts = [];

  let resultContainer = document.getElementById("result-container");
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
    let resultContainer = document.getElementById("result-container");
    resultContainer.appendChild(queryResult);
  }
}

const runQuery = () => {
  resetQuery();
  getItems();
  getBrands();
  getUserQuery();
  queryAction();
  showQueryResult();
  console.log(userQueriedProducts);

}

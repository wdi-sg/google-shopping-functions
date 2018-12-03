var items = getItems(products)

// All items made by Sony.

// var sonyItems = getItemsByBrand(items, 'Sony');
// console.log(sonyItems);

// All items made by Sony that are available.

// var availableSonyProducts = getAvailableProducts(sonyItems);

// All available items by the author "Adorama Camera"

// var adoramaProducts = getItemsByAuthor(items, "Adorama Camera")

// All items made by Nikon with the author eBay.

// var nikonItems = getItemsByBrand(items, 'Nikon');
// var nikonOnEbay = getItemsByAuthor(nikonItems, "eBay");

function getSearchTerm() {
  var radioButton = document.getElementsByName("searchTerm");
  var selectedValue;

  if (radioButton[0].checked === true) {
    selectedValue = radioButton[0].value;
  } else if (radioButton[1].checked === true){
    selectedValue = radioButton[1].value;
  } else {
    selectedValue = radioButton[2].value;
  }

  return selectedValue;
}

function displayResult(resultList) {

  var outputDisplay = document.getElementById("search-result");
  var outputDisplay = document.getElementById("search-result");
  outputDisplay.innerHTML = "";

  // outputDisplay.insertAdjacentHTML('beforeend',  '<table style="width:100%"></table>');
  for (i = 0; i < resultList.length; i++) {
    displayItem = '<p>' + (i + 1) + ". " + resultList[i].product.brand + " : " + resultList[i].product.title + ' - $' + resultList[i].product.inventories[0].price + '</p>'
    outputDisplay.insertAdjacentHTML('beforeend', displayItem);
  }

  //   outputDisplay.insertAdjacentHTML('beforeend',  '<tr><td>Jill</td><td>Smith</td><td>50</td></tr>)');
  //   outputDisplay.insertAdjacentHTML('beforeend',  '</table>');
}

function searchInfo() {
  var schTerm = getSearchTerm();
  var schData = document.getElementById("searchData").value;
  var searchResult = [];
  var inStock = document.getElementById('inStock').checked;
  var backorder = document.getElementById('backorder').checked;
  var productStatus = "";

  if (inStock && backorder) {
    productStatus = "All";
  }  else if (inStock) {
    productStatus = "inStock"
  } else if (backorder) {
    productStatus = 'backorder';
  }
  else {
    productStatus = 'All';
  }

  // if (schData.length <= 0) {
  //   alert("Must enter a value in search string")
  // } else {
  if (schTerm === "byBrand") {
    searchResult = getItemsByBrand(items, schData, productStatus);
  } else if (schTerm === "byAuthor") {
    searchResult = getItemsByAuthor(items, schData, productStatus);
  } else {
    searchResult = getAvailableProducts(items, schData, schTerm, productStatus);
  }

  // }

  // if (searchResult.length < 1) {
  //   alert("No result found")
  // } else {
  displayResult(searchResult);
  // }

}

var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchInfo);

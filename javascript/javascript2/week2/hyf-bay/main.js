console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector("ul");

function renderProducts(products) {
    // your code here
    productList.innerHTML = "";
    products.forEach(product => {
        let li = document.createElement("li");
        let title = document.createElement("span");
        let productPrice = document.createElement("div");
        let productRating = document.createElement("div");

        title.innerHTML = product.name;
        li.appendChild(title);
        productPrice.innerHTML = "price: " + product.price;
        li.appendChild(productPrice);
        productRating.innerHTML = "rating: " + product.rating;
        li.appendChild(productRating);

        productList.appendChild(li);
    });
}

renderProducts(products); // This should create the ul and the li's with the individual products details


//searching for products

function searchingForProduct(inputProducts) {
    const inputBoxValue = inputBoxText.value.toLowerCase();
    return inputProducts.filter(product => product.name.toLowerCase().includes(inputBoxValue));
};

function searchingForMaximumPrices(inputProducts) {
    const maxPrice = parseInt(inputMaximumPrice.value);
    let filteredMaximumPrices = inputProducts;
    if (!isNaN(maxPrice)){
        filteredMaximumPrices = inputProducts.filter(product => product.price <= maxPrice);
    }
    return filteredMaximumPrices;
};

function getPremiumProduct(inputProducts){
    if (premiumBoxText.checked) {
    return inputProducts.filter(product => product.price > 5000 && product.rating > 6);
    } else {
    return inputProducts;   
    }
}

function sortProducts(inputProducts){
    let index = sortingSelectorElement.selectedIndex;
    sortType = sortingSelectorElement.options[index].value;
    let sortedProducts = inputProducts;
    if(sortType == 1){
        sortedProducts = inputProducts.sort((p1, p2) => (p1.name > p2.name) ? 1 : ((p2.name > p1.name) ? -1 : 0))
    } else if(sortType == 2){
        sortedProducts = inputProducts.sort((p1, p2) => p1.price - p2.price);
    } else if(sortType == 3){
        sortedProducts = inputProducts.sort((p1, p2) => p1.rating - p2.rating);
    }
    return sortedProducts;
}

function searchAndSort(){
    let filteredProducts = searchingForProduct(products);
    filteredProducts = searchingForMaximumPrices(filteredProducts);
    filteredProducts = getPremiumProduct(filteredProducts);
    filteredProducts = sortProducts(filteredProducts);
    renderProducts(filteredProducts);
}

const inputBoxText = document.getElementById("productName");
inputBoxText.addEventListener('keyup', searchAndSort);

const inputMaximumPrice = document.getElementById("maximumPrice");
inputMaximumPrice.addEventListener('keyup', searchAndSort);

const sortingSelectorElement = document.querySelector("#sortingSelector");
sortingSelectorElement.addEventListener('change', searchAndSort);

// Extra feature
const premiumBoxText = document.getElementById("premiumProducts");
premiumBoxText.addEventListener('change', searchAndSort);


console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector("ul");

function renderProducts(products) {
    // your code here
    products.forEach(product => {
        let li = document.createElement("li");
        let title = document.createElement("h2");
        let productPrice = document.createElement("p");
        let productRating = document.createElement("p");

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

const productsInfoElement = document.getElementById("productsInfo");
const currencyElement = document.getElementById("currency");

let exchangeInfo = null;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toHTML(currencyCode){
        return `<div>${this.name} : ${this.convertToCurrency(currencyCode)} ${currencyCode}</div>`      
    }

    convertToCurrency(currencyCode){
        return Math.floor(exchangeInfo.rates[currencyCode] * this.price * 100)/100;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(productItem => productItem.name.toLowerCase() != product)
    }

    searchProduct(productName) {
        return this.products.filter(product => product.name.toLowerCase().indexOf(productName.toLowerCase()) != -1)
    }

    getTotal() {
        return this.products
            .map(product => {
                const currentCurrencyCode = this.getCurrentCurrency();
                return product.convertToCurrency(currentCurrencyCode);
            })
            .reduce((totalPrice, price) => totalPrice += price, 0);
    }

    renderProducts(username) {
        let htmlShoppingCart = `<div> Username: ${username}</div>`;
        htmlShoppingCart += "<br>";
        htmlShoppingCart += this.products.reduce((htmlResult, product) => {
            const currentCurrencyCode = this.getCurrentCurrency();
            return htmlResult += product.toHTML(currentCurrencyCode);
        }, "");
        htmlShoppingCart += "<hr/>";
        htmlShoppingCart += `<div>Total: ${this.getTotal()} ${this.getCurrentCurrency()}</div>`;
        productsInfoElement.innerHTML = htmlShoppingCart;
    }

    getUser() {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
                .then(response => response.json());
    }
    getCurrentCurrency(){
        return currencyElement.options[currencyElement.selectedIndex].value;
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const iphone11 = new Product("Iphone 11", 10000);
const bicycle = new Product("Bicycle", 5000);
const juiceMaker = new Product("Juice maker", 1000);
const pc = new Product("Pc", 7000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iphone11);
shoppingCart.addProduct(bicycle);
shoppingCart.removeProduct(flatscreen);
shoppingCart.addProduct(juiceMaker);
shoppingCart.addProduct(pc);


fetch("http://data.fixer.io/api/latest?access_key=495e00c64f950fd3e8e39bcf3801f1a8")
        .then(response => response.json())
        .then(result => {
            exchangeInfo = result;
            shoppingCart.getUser()
                    .then(userData => {
                        shoppingCart.renderProducts(userData.username);
                        currencyElement.addEventListener('change', () => {
                            shoppingCart.renderProducts(userData.username);
                        });
                    })
                    .catch(error => console.log("Fetching user/Rendering cart failed: ", error.message));
        })
        .catch(error => console.log("Fetching exchange info failed: ", error.message));
let product = (function () {
     const arr = [];
    let $catalog = $('#catalog');

    class Product {
        constructor(name, price, quantity, img) {
            this.name = name,
                this.price = price,
                this.quantity = quantity,
                this.img = img;
        }
    }

    function addToCatalog(name, price, quantity, img) {
        const product = new Product(name, price, quantity, img);
        arr.push(product);
        createCatalog();
    }

    function createCatalog() {
        $catalog.html('');
        arr.forEach(function (element) {
            const {
                 img, name, price 
                } = element;

            let $product = $(`<div class = 'product'>
                              <img src = ${img} alt='${name}-img' class = 'imgprod'>
                              <div><h3>${name}</h3></div>
                              <div>price<input type = 'text' class = 'productPrice' value = '${price}' readonly></div>
                              <div>quantity: <input type = 'number' class = 'productQuantity' min = '0'></div>
                              <div>total price: <input type = 'number' class = 'productSum' readonly></div>
                              <button type = 'submit' class = 'add-to-cart' id = '${name}'>add to cart</button>
                          </div>`);
            $product.appendTo($catalog);
        });
    }
    return {
        addToCatalog
    };
}
)();
export default product;
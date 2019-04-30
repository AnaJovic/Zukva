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

   function addToShop(name, price, quantity, img) {
       const product = new Product(name, price, quantity, img);
       arr.push(product);
       createShop();
   }

   function createShop() {
       $catalog.html('');
       arr.forEach(function (element) {
           const {
                img, name, price 
               } = element;

           let $products = $(`<div class = 'product bradius'>
                             <img src = ${img} alt='${name}-img' class = 'imgprod'>
                             <div><h3>${name}</h3></div>
                             <div>price<input type = 'text' class = 'productPrice' value = '${price}' readonly></div>
                             <div>quantity: <input type = 'number' class = 'productQuantity bradius' min = '0'></div>
                             <div>total price: <input type = 'number' class = 'productSum bradius' readonly></div>
                             <button type = 'submit' class = 'buy-prod bradius'>Buy</button>
                         </div>`);
           $products.appendTo($catalog);
       });
   }
   return {
       addToShop
   };
}
)();
export default product;
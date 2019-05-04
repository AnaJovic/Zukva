let product = (function () {
        const arr = [];
       let $catalog = $('#catalog');
       class Product {
         constructor(info,name, price, quantity, img) {
               this.name = name,
                   this.price = price,
                   this.quantity = quantity,
                this.img = img;
                   this.info = info;
           }
    }
       function addProduct(info,name, price, quantity, img) {
           const product = new Product(info,name, price, quantity, img);
           arr.push(product);
           createProduct();
       }
       function createProduct() {
           $catalog.html('');
           arr.forEach(function (element) {
               const {
                info, img, name, price
                } = element;
             let $products = $(` 
               <div class = 'product bradius'>
                              <img src = ${img} alt='${name}-img' class = 'imgprod'>
                              <div class="infoh"><i class="fa fa-info-circle fa-lg pinfo" aria-hidden="true"></i><h3 data=${info}>${name}</h3></div>
                              <div>price<input type = 'text' class = 'productPrice' value = '${price}' readonly></div>
                                 <div>quantity: <input type = 'number' class = 'productQuantity bradius' min = '0'></div>
                              <div>total price: <input type = 'number' class = 'productSum bradius' readonly></div>
                              <button type = 'submit' class = 'buy-prod bradius'>Buy</button>
                             </div>`);
               $products.appendTo($catalog);
        });
    }
    function modalActive(e) {
     if (e.target.classList.contains('pinfo')) {
         const parentDiv = e.target.parentElement.parentElement;
         const name = parentDiv.querySelector('h3').textContent;
         const info = parentDiv.querySelector('h3').getAttribute('data');  
         $('#id01').append(`<div class="modal-content animate">
             <div class="containert">
         <h2>Product info</h2>
            <p>${info}</p>
             </div>`);
         $('#id01').css({
             display: 'block', width: '100%'
            }); 
                    } 
                }
                let modal = document.getElementById('id01');
         window.onclick = function (event) {
         if (event.target == modal) {
             modal.style.display = 'none';
             $('#id01').html('');
         }
 };
       $('#catalog').click(modalActive);
    
    return {
        addProduct
    };
    }
    )();
     export default product;

let product = (function(){
 
    const arr = [];
    let $catalog = $('#catalog');
    
    class Product {
        constructor(name,price,quantity,img){
            this.name = name,
            this.price = price,
            this.quantity = quantity,
            this.img = img
        }
    }
    
    function addToCatalog(name,price,quantity,img){
        const product = new Product(name,price,quantity,img);
        arr.push(product);
        createCatalog();
    }
 
    function createCatalog(){
        $catalog.html('');
        arr.forEach(function(element) {
        const {img,name,price} = element;
    
         let $product = $(`<div class = 'product'>
                            <img src = ${img} alt='${name}-img'>
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
        }
   
    })();
    product.addToCatalog('Beli Pasulj(200g)',180,100,'images/Product/pasuljb.jpg');
    product.addToCatalog('Crni Pasulj(100g)',230,100,'images/Product/pasuljcrn.jpg');
    product.addToCatalog('Crveni Pasulj(100g)',120,100,'images/Product/pasuljc.jpg');
    product.addToCatalog('Žuti Pasulj(200g)',190,100,'images/Product/pasuljz.jpg');
    product.addToCatalog('Šareni Pasulj(200g)',175,100,'images/Product/pasuljs.jpg');
    product.addToCatalog('Cacarica(100g)',120,100,'images/Product/cacarica.jpg');
    product.addToCatalog('Luk Crni(seme)',320,100,'images/Product/lukcrn.jpg');
    product.addToCatalog('Luk Crveni(seme)',120,100,'images/Product/lukcrven.jpg');
    product.addToCatalog('Beli Luk(seme)',190,100,'images/Product/lukbeo.jpg');
 
   
const _api = axios.create({
    baseURL: `http://localhost:3000`
  });
  
  async function displayProduct() {
    let response = await _api.get(`/product`);
    let product = await response.data;
    for (const prod of product) {
      _render(prod);
    }
  }
  

  async function _render(prod) {
    $(`#catalog`).append(`<div class = 'product bradius'>
    <img src = ${prod.url} alt='' class = 'imgprod'>
    <div><h3 id = 'pname'>${prod.name}</h3></div>
    <div>price<input type = 'text' class = 'productPrice' value = '${prod.price}' id='price' readonly></div>
    <div>quantity: <input type = 'number' class = 'productQuantity bradius' id = 'quant' min = '0'></div>
    <div>total price: <input type = 'number' class = 'productSum bradius' readonly></div>
    <button type = 'submit' class = 'buy-prod bradius'>Buy</button>
</div>`);
  }
  displayProduct();

  $('#prod-list').click(async (e) => {
    const prodid = e.target.innerHTML;
    let id;
    switch (prodid) {
      case 'All': id = 0;
      break;
      case 'Spreads': id = 1;
        break;
      case 'Jams': id = 2;
        break;
      case 'Pickle': id = 3;
        break;
      case 'Juices': id = 4;
        break; 
        case 'Alcohol': id = 5;
        break; 
        case 'Vegetables': id = 6;
        break; 
    }

    let response = await _api.get(`/product?prid=${id}`);
    let product = await response.data;
    let responset = await _api.get(`/product?allid=${id}`);
    let producti = await responset.data;
    $(`#catalog`).html('');
    for (const prod of product) {
      _render(prod);
    }
    for (const prod of producti) {
      _render(prod);
    }
});
  export {
      _render, displayProduct, _api
  }; 
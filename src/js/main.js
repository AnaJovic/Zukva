
  // navigation
  $(document).ready(function () {
	$('.toggle-nav').click(function (e) {
		$(this).toggleClass('active');
		$('.menu ul').toggleClass('active');
		e.preventDefault();
	});
});
// scroll arrow
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 60) {
        $('#top').fadeIn();
        $('#scroll').fadeOut();
    } else {
        $('#scroll').fadeIn();
        $('#top').fadeOut();
    }
});

// shop and cart
let main = (function () {
	function start() {
		$catalog.on('click', buyProduct);
		$catalog.on('input', calculateTotal);
		$shopCart.on('click', removeProduct);
		$emptyCartBtn.on('click', emptyCart);
		$(document).on('DOMContentLoaded', emptyCart);
	}
	const $catalog = $('#catalog'),
		$shopCart = $('#cart-content tbody'),
		$emptyCartBtn = $('#empty-cart');
	let cart = 0;
	function buyProduct(e) {
		e.preventDefault();
		if (e.target.classList.contains('buy-prod')) {
			const product = e.target.parentElement;
			const quantity = e.target.parentElement.querySelector('.productQuantity');
			if (quantity.value <= 0 || quantity.value === '') {
				quantity.style.border = '1px solid red';
				quantity.value = '';
				e.target.parentElement.querySelector('.productSum').value = '';
			} else {
				quantity.style.border = '1px solid grey';
				getProduct(product);
			}
		}
	}

	function getProduct(product) {
		const productInfo = {
			image: product.querySelector('img').src,
			name: product.querySelector('h3').textContent,
			price: product.querySelector('.productPrice').value,
			quantity: parseInt(product.querySelector('.productQuantity').value),
			productSum: product.querySelector('.productSum').value,
			cart_id: cart
		};
		addToCart(productInfo);
	}

	function addToCart(product) {
		const row = $('<tr></tr>');
		const { 
			name, price, quantity, image, productSum
 } = product;
		$(`    <td>
				 <img src="${image}" class="imgcart">
			</td>
			<td>${name}</td>
			<td>${price}</td>
			<td>${quantity}</td>
			<td>${productSum}</td>
			<td>
				<a href="#shop" class="remove" id="${cart++}">X</i></a>
			</td>
	`).appendTo(row);

		row.appendTo($shopCart);
		saveToStorage(product);
	}

	function calculateTotal(e) {
		let quantity = parseInt(e.target.parentElement.parentElement.querySelector('.productQuantity').value),
			price = parseInt(e.target.parentElement.parentElement.querySelector('.productPrice').value),
			productSum = e.target.parentElement.parentElement.querySelector('.productSum');
		productSum.value = price * quantity;
	}

	function saveTotalInStorage(product) {
		let total = 0;
		product.forEach(element => {
			total = parseInt(total) + parseInt(element.productSum);
		});
		document.getElementById('total').innerText = `To Pay: ${total} RSD`;
		sessionStorage.setItem('total', JSON.stringify(total));
	}

	function saveToStorage(product) {
		let products = getFromStorage();
		products.push(product);
		saveTotalInStorage(products);
		sessionStorage.setItem('products', JSON.stringify(products));
	}

	function getFromStorage() {
		let products;
		if (sessionStorage.getItem('products') === null) {
			products = [];
		} else {
			products = JSON.parse(sessionStorage.getItem('products'));
		}
		return products;
	}

	function removeProduct(e) {
		let product, productId;
		if (e.target.classList.contains('remove')) {
			e.target.parentElement.parentElement.remove();
			product = e.target.parentElement.parentElement;
			productId = product.querySelector('a').getAttribute('id');
			console.log(productId);
		}
		removeFromStorage(productId);
	}

	function removeFromStorage(id) {
		let productsSS = getFromStorage();
		productsSS.forEach(function (productSS, index) {
			if (productSS.cart_id == id) {
				productsSS.splice(index, 1);
			}
		});

		sessionStorage.setItem('products', JSON.stringify(productsSS));
		saveTotalInStorage(productsSS);
	}

	function emptyCart() {
		$shopCart.html('');
		$('#total').html('');
		sessionStorage.clear();
		cart = 1;
	}
	return {
		start
	};
})();
export default main;

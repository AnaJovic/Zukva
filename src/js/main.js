// navigation
jQuery(document).ready(function () {
	jQuery('.toggle-nav').click(function (e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');
		e.preventDefault();
	});
});

// shop and cart
let main = (function () {
	function start() {
		$catalog.on('click', buyProduct);
		$catalog.on('input', calculateTotal);
		$shoppingCartContent.on('click', removeProduct);
		$emptyCartBtn.on('click', emptyCart);
		$(document).on('DOMContentLoaded', emptyCart);
	}
	const $catalog = $('#catalog'),
		$shoppingCartContent = $('#cart-content tbody'),
		$emptyCartBtn = $('#empty-cart');
	let cart = 0;
	function buyProduct(e) {
		e.preventDefault();
		if (e.target.classList.contains('buy-prod')) {
			const product = e.target.parentElement;
			const quantity = e.target.parentElement.querySelector('.productQuantity');
			if (quantity.value < 0 || quantity.value === '') {
				quantity.style.border = '1px solid red';
				quantity.value = '';
				e.target.parentElement.querySelector('.productSum').value = '';
			} else {
				getProducInfo(product);
			}
		}
	}

	function getProducInfo(product) {
		const productInfo = {
			image: product.querySelector('img').src,
			title: product.querySelector('h3').textContent,
			price: product.querySelector('.productPrice').value,
			quantity: parseInt(product.querySelector('.productQuantity').value),
			productSum: product.querySelector('.productSum').value,
			cart_id: cart
		};
		addIntoCart(productInfo);
	}

	function calculateTotal(e) {
		let quantity = parseInt(e.target.value),
			price = parseInt(e.target.parentElement.parentElement.querySelector('.productPrice').value),
			productSum = e.target.parentElement.parentElement.querySelector('.productSum');
		e.target.style.border = '1px solid olive';
		productSum.value = price * quantity;
	}

	function addIntoCart(product) {
		const row = $('<tr></tr>');
		const { 
			title, price, quantity, image, productSum
 } = product;
		$(`    <td>
				 <img src="${image}" class="imgcart">
			</td>
			<td>${title}</td>
			<td>${price}</td>
			<td>${quantity}</td>
			<td>${productSum}</td>
			<td>
				<a href="#" class="remove" id="${cart++}">X</i></a>
			</td>
	`).appendTo(row);

		row.appendTo($shoppingCartContent);
		saveIntoStorage(product);
	}

	function saveTotalIntoStorage(product) {
		let total = 0;
		product.forEach(element => {
			total = parseInt(total) + parseInt(element.productSum);
		});
		document.getElementById('total').innerText = `To Pay: ${total} RSD`;
		sessionStorage.setItem('total', JSON.stringify(total));
	}

	function saveIntoStorage(product) {
		let products = getProductFromStorage();
		products.push(product);
		saveTotalIntoStorage(products);
		sessionStorage.setItem('products', JSON.stringify(products));
	}

	function getProductFromStorage() {
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
		removeProductFromSessionStorage(productId);
	}

	function removeProductFromSessionStorage(id) {
		let productsSS = getProductFromStorage();
		productsSS.forEach(function (productSS, index) {
			if (productSS.cart_id == id) {
				productsSS.splice(index, 1);
			}
		});

		sessionStorage.setItem('products', JSON.stringify(productsSS));
		saveTotalIntoStorage(productsSS);
	}

	function emptyCart() {
		clearSessionStorage();
		$shoppingCartContent.html('');
		$('#total').html('');
	}

	function clearSessionStorage() {
		sessionStorage.clear();
		cart = 1;
	}

	return {
		start
	};
})();
export default main;
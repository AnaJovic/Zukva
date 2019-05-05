(function () {
    const $shopCartCont = $('#cart-contentTable tbody'),
        delivery = $('#delivery');

    delivery.on('input', deliveryOpt);
    $(document).on('DOMContentLoaded', function () {
        getFromSStorage();
        getFormData();
        registerInputEvent();
    });
    function getProductFromStorage() {
        let products;
        if (sessionStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(sessionStorage.getItem('products'));
        }
        return products;
    }

    function getTotalFromLocalStorage() {
        let total;
        if (sessionStorage.getItem('total') === null) {
            total = '';
        } else {
            total = JSON.parse(sessionStorage.getItem('total'));
        }
        return total;
    }

    function getFromSStorage() {
        let productsSS = getProductFromStorage();
        let total = getTotalFromLocalStorage();
        productsSS.forEach(function (product) {
            const {
                name, price, quantity, image, productSum
            } = product;
            const row = $('<tr></tr>');
            $(`
            <td>
                <img src="${image}" width=50px>
            </td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${productSum}rsd</td>
        `).appendTo(row);
            row.appendTo($shopCartCont);
        });
        $('#total').text(`Your account: ${total} RSD`);
    }
    // delivery
    function deliveryOpt(e) {
        const check = e.target;
        switch (check.id) {
            case 'express1': expDel(check);
                break;
            case 'express2': expDelT(check);
                break;
        }
    }

    function expDel(check) {
        let total = getTotalFromLocalStorage();
        let toPay = document.getElementById('pay');
        if (check.checked) {
            toPay.style.display = 'block';
            toPay.textContent = `To pay: ${total + 300} RSD`;
            let payS = total + 300;
            sessionStorage.setItem('payS', JSON.stringify(payS));
        } else {
            toPay.style.display = 'none';
        }
    }
    function expDelT(check) {
        let total = getTotalFromLocalStorage();
        let toPay = document.getElementById('pay');
        if (check.checked) {
            toPay.style.display = 'block';
            toPay.textContent = `To pay: ${total + 400} RSD`;
            let payS = total + 400;
            sessionStorage.setItem('payS', JSON.stringify(payS));
        } else {
            toPay.style.display = 'none';
        }
    }

    // regex for form elements
    const RegEx = {
        firstName: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,11})?$/,
        lastName: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}\s?([A-ZŠĐŽĆČ][a-zšđčćž]{1,11})?$/,
        address: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,20}\s?([A-ZŠĐŽĆČa-zšđčćž][a-zšđčćž]{1,11})?\s\d{1,3}$/,
        city: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,20}\s?([A-ZŠĐŽĆČa-zšđčćž][a-zšđčćž]{1,11})?\s?([A-ZŠĐŽĆČa-zšđčćž][a-zšđčćž]{1,11})?$/,
        postalCode: /^[1-9]\d{4}$/,
        phone: /^\d{3}\/(\d{3}-?\d{4}|\d{4}-?\d{3})$/,
        email: /^[a-zšđčćž\-.]{3,}[0-9]*@[a-zšđčćž]{3,}.[a-zšđčćž]{2,3}$/
    };
    const formData = {

    };
    function getFormData() {
        formData.form = document.getElementById('form');
        formData.tbody = formData.form.querySelector('tbody');
        for (tr of formData.tbody.rows) {
            let input = tr.querySelector('input');
            formData[input.id] = input;
        }
    }
    function testRegex(e) {
        let testReg = RegEx[e.target.id].test(e.target.value);
        if (!testReg) {
            formData[e.target.id].style.border = '2px solid red';
        } else {
            formData[e.target.id].style.border = '2px solid blue';
        }
    }
    function registerInputEvent(e) {
        formData.form.addEventListener('input', testRegex);
    }

    let userInfo = [];
    const button = document.getElementById('submit');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const postalCode = document.getElementById('postalCode');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    button.addEventListener('click', function (e) {
        userInfo.push({
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            postalCode: postalCode.value,
            phone: phone.value,
            email: email.value
        });
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    });
})();
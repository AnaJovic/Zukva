(function () {
    const $shopCartCont = $('#cart-contentTable tbody'),
        delivery = $('#delivery');

    delivery.on('input', userInput);

    $(document).on('DOMContentLoaded', function () {
        getFromSStorage();
        getFormElement();
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

    const formElements = {

    };

    function getFormElement() {
        formElements.form = document.getElementById('form');
        formElements.tbody = formElements.form.querySelector('tbody');
        for (tr of formElements.tbody.rows) {
            let input = tr.querySelector('input');
            formElements[input.id] = input;
        }
    }
    function testInputReg(e) {
        let testReg = RegEx[e.target.id].test(e.target.value);
        if (!testReg) {
            formElements[e.target.id].style.borderBottom = '2px solid red';
        } else {
            formElements[e.target.id].style.borderBottom = '2px solid blue';
        }
    }
    function registerInputEvent(e) {
        formElements.form.addEventListener('input', testInputReg);
    }
// delivery
    function userInput(e) {
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
        } else {
            toPay.style.display = 'none';
        }
    }
})();
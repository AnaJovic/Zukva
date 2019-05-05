const users = (function () {
    const getUser = function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const postalCode = document.getElementById('postalCode').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const total = JSON.parse(sessionStorage.getItem('total'));
        const products = JSON.parse(sessionStorage.getItem('products'));
        const deliver = JSON.parse(sessionStorage.getItem('payS'));
      
        return {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            postalCode: postalCode,
            phone: phone,
            email: email,
            total: total,
            products: products,
            deliver: deliver
        };
    };
    const submitUser = async function () {
        let user = getUser();
        await dataBase.postUser(user);
      };
      var modal = document.getElementById('myModal');
      var bttn = document.getElementById('submit');
      bttn.onclick = function () {
        modal.style.display = 'block';
      };
    return {
        submitUser: submitUser
    };
})();

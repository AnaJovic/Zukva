const dataBase = (function () {
    const _dataB = axios.create({
        baseURL: `http://localhost:3000`
    });
    const postUser = async function (user) {
        let response;
        try {
            let header = {
                'Content-Type': 'aplication/json'
            };
            response = await _dataB.post('/users', user, header);
            let resp = await response.data;
        } catch (e) {
            console.log(e);
        }
    };
    return {
        postUser: postUser
    };
})();
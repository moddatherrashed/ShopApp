let apiGetRequests = {
    getRequests(typeOfGet, id) {
        switch (typeOfGet) {
            case 'getCatagories':
                return fetch('http://www.jamrahgroup.com/api/getCategories')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getProducts':
                return fetch('http://www.jamrahgroup.com/api/getProduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cat_id: id
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getContactUs':
                return fetch('http://www.jamrahgroup.com/api/contactUs', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getUserInfo':
                return fetch('http://www.jamrahgroup.com/api/getUserInfo', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        c_id: 1
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        alert(error);
                    })
                break;
            case 'getCost':
                return fetch('http://www.jamrahgroup.com/api/getDeliveryCost', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        alert(error);
                    })
                break;
            case 'getUserOrder':
                return fetch('http://www.jamrahgroup.com/api/getUserOrder', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: id
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
        }
    }
}

module.exports = apiGetRequests
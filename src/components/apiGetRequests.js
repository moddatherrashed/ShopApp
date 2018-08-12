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
                        c_id: id
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
            case 'getUserOrders':
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
            case 'forgetPassword':
                return fetch('http://www.jamrahgroup.com/api/forgetPassword', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: id
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getOffers':
                return fetch('http://www.jamrahgroup.com/api/getOffres', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: id
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getOrderHistory':
                return fetch('http://www.jamrahgroup.com/api/getUserOrder', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: id
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'getSingleOrderHistory':
                return fetch('http://www.jamrahgroup.com/api/getUserHistoryOrderDeatials', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: id
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
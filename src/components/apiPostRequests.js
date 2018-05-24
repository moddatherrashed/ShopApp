let apiPostRequests = {
    postRequests(typeOfPost, dataToSend) {
        switch (typeOfPost) {
            case 'signIn':
                return fetch('http://www.jamrahgroup.com/api/user/login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
            case 'signUp':
                return fetch('http://www.jamrahgroup.com/api/users/signup', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
                case 'fillInfo':
                return fetch('http://www.jamrahgroup.com/api/fillUserData', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
                case 'addOrder':
                return fetch('http://www.jamrahgroup.com/api/addOrder', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
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

module.exports = apiPostRequests
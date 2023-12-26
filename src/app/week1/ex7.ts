const callApi = () => {
    return new Promise((resolve, reject) => {
        fetch('https://provinces.open-api.vn/api/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

callApi().then(
    (data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }
);
function sendRequest() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', './src/package.json');

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong');
        };

        xhr.responseType = 'json';
        xhr.send();
    });
}

export default sendRequest;

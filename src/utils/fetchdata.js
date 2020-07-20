let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        //varoable.open(metodo de transferencia, url, asincrono = true)
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange =  ((e) => {
            if(xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('error'));
            }
        });
        xhttp.send();
    })
}

module.exports = fetchData;
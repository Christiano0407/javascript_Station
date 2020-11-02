//PROMESAS
let XMLHTTPRequest = require(`xmlhttprequest`).XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHTTPRequest();
       xhttp.open(`GET`, url_api, true);
       xhttp.onreadystatechange = (() => {
           if(xhttp.readyState === 4) {
   
               (xhttp.status === 200)
               ? resolve(JSON.parse(xhttp.responseText))
               : reject(new Error(`Error`, url_api))
           }
       });
       xhttp.send();
       });
    }

    module.exports = fetchData;

/* let API = `https://rickandmortyapi.com/api/character/`; */
const somethingWillHappen = ()  => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(`Yes!!`);
        }else {
            reject(`Nooo!!`);
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

//2
const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if(true) {
        setTimeout(() => {
            resolve("True");
        }, 2000)
        }else {
         const error = new Error ("No se pudo");
         reject(error);
        }
    });
};
somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err))

//correr varias promesas a la vez. Método "all".
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log(`Array of results`, response);
})
.catch(err => {
    console.error(err);
})

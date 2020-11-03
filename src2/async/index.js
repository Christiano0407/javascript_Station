const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve(`Do something Async`), 3000)
        : reject(new Error(`Test Error`))
    });
}
//Async and Await
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log(`Before`);
doSomething();
console.log(`After`);
 
//capturar los errores en Async and Await
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error) {
        console.error(error)
    }
}

console.log(`Before2`);
anotherFunction();
console.log(`Before2`);
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

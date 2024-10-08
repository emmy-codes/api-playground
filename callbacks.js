// const sum = (a, b, callbackFn) => {
//     const result = a + b;
//     callbackFn(result);
// };

// sum(3, 4, (result) => {
//     console.log("The sum is: ", result);
// });

// const greeting = (name, callbackFn) => {
//     console.log(`Hello, ${name}!`);
//     callbackFn();
// };

// greeting("Emma", () => {
//     console.log("Have a great day!")
// });

// const delayedMessage = (message, callbackFn, delay) => {
//     setTimeout(() => {
//         console.log(message);
//         callbackFn();
//     }, delay);
// };

// delayedMessage("This message appears after 2 seconds...", () => {
//     console.log("The delay is done!");
// }, 2000);

// let numbers = [1, 2, 3, 4, 5];

// const processArray = (arr, callbackFn) => {
//     arr.forEach((number) => {
//         callbackFn(number);
//     });
// };

// processArray(numbers, (number) => {
//     console.log(number * 2)
// });

// const calculator = (a, b, callbackFn) => {
//     // logic
//     return callbackFn(a, b);
// };

// let sum = calculator(5, 3, (a, b) => {
//     return a + b;
// });

// let product = calculator(5, 3, (a, b)  => {
//     return a * b;
// });

// console.log("Sum: " + sum);
// console.log("Sum: " + product);

// const myPromise = new Promise((resolve, reject) => {
//     // logic
//     let success = false;
//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed :(");
//     }
// });

// myPromise
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log("Error: " + error);
// });


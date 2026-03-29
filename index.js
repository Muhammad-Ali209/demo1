// // probrem 1

// let adder = (n) => {
//     return function counter() {
//         return n++
//     }
// }

// const counter = adder(1)
// console.log(counter());
// console.log(counter());

// console.log("hello world");


// // problem 2

// const createCounter = (init) => {
//     let number = init;

//     return {
//         increment: () => {
//             number += 1;
//             return number;
//         },
//         decrement: () => {
//             number -= 1;
//             return number;
//         },
//         reset: () => {
//             number = init;
//             return number;
//         }
//     };
// };
// console.log(createCounter(5).increment());
// console.log(createCounter(5).decrement());
// console.log(createCounter(5).reset());



// problem3

const addarray = () => {
    let arr = [1, 2, 3]
    let newarr = []

    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] + 1
        
    }
    console.log(newarr);


}
addarray()
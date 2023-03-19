// Standard for
// Define the starting point
// Define end/exit condition
// Decide increment/decrement

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Advanced use case with an Array
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
//console.log(arr.length); //5
let sum = 0
for (let i = 0; i < arr.length; i++) {
    let arrEle = arr[i]
    if (typeof arrEle === "number") {
        // sum = sum + arrEle
        sum += arrEle
    }
}
console.log(`The value of sum: ${sum}`);
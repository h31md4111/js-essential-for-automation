// Comparison operator
// 1. == checks only the value 
// 2. === (strict equality operator: value+type)
// 3. !=
// 4. !==
// 5. >
// 6. >=
// 7. <
// 8. <=
//  @returns boolean

//  @rule:
//  In most cases if two operands are not of the same type, JS attempts to convert them to an appropriate type for the comparsion.Comparison
//  This behaviour generally results in comparing the operands numerically

//Use case1: Strict equality (===, !==)

let a = "1"
let b = 1
console.log(a == b); // true
console.log(a === b); // false

// Not equl

console.log(1 !== 1); // false
console.log(1 !== 2); // true
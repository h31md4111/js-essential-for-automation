// Logical operator
// 1. &&
// 2. ||
// 3. !

// Twi main purposes:
// 1. In conditional statements (e.g. if...else)
// 2. To have a default value

//Use case1: AND (&&) check if given val is a text

let val = 10
if (typeof val === "string" && val.length > 1) {
    console.log(`Given value : ${val} is valid string`);
} else {
    console.log(`Given value : ${val} is NOT valid string`);
}
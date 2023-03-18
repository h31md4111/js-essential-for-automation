// use case 1: Just if - handling a random popup
let popupExist = true
if (popupExist === true) {
    console.log(`>>> Perform click action...`);
}

// use case 2: just if (not) - checking for falsy value
let data = "PASS"
if(!data) throw Error(">>> No valid data provided")

// use case 3: if..else: If file exist read the file, else create the file
let fileExist = "Y"

if (fileExist === "Y") {
console.log(`>>> Reading the file`);
} else {
console.log(`>>> Creating the file`);
}

// use case 4: if else if ... Nested conditions... Act based on list of conditions
let err = "AssertionError"

if (err === "Error") {
    console.log(`>>> Retry...`);
} else if (err === "AssertionError") {
    console.log(`>> Fail the test`);
} else if (err === "DataValidation") {
    console.log(`>> Read the test data file...`);
} else {
    console.log(`>> Print the error message`);
}
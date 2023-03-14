// Logical operator NOT

// Check if both first and last name is provided

let firstname = "";
let lastname = "Bob"

// if (!firstname) {
//     console.log(`Given value :${firstname} is not a valid data`);
// }

if (!firstname || !lastname) {
        console.log(`One of the name :${firstname} or ${lastname} is not a valid`);
    }
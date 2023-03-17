// use case 1: Just if - handling a random popup
let popupExist = true
if (popupExist === true) {
    console.log(`>>> Perform click action...`);
}

// use case 2: just if (not) - checking for falsy value
let data = "PASS"
if(!data) throw Error(">>> No valid data provided")
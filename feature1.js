greetMe = function (name = null, isFormal = true) {
    let greeting;
    if (isFormal = true) {
        greeting = `Good day, ${name}!`;
        return greeting
    } else {
        greeting = `Hi ${name}!`;
        return greeting
    }
}
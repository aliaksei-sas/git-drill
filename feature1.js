greetMe = function(name, isFormal = true) {
    let greeting;
    if (isFormal = false) {
        console.log(`Hi ${name}!`);
    } else {
        console.log(`Good day, ${name}!`);
    }
}

console.log(greetMe('Alex', ))

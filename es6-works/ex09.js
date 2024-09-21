
function divide(num1, num2, callback) {

    if (typeof callback != 'function') {
        throw "Please pass callback function";
    }

    setTimeout(() => {

        if (typeof num1 != 'number') {
            callback("Please enter 1st arg as number");
            return;
        }
        if (typeof num2 != 'number') {
            callback("Please enter 2nd arg as number");
            return;
        }

        if (num2 == 0) {
            callback("Sorry number cannot be divided");
            return;
        }

        callback(null, num1 / num2);
    }, 0);
}



console.log("Start of Script");
let num1 = "10a";
let num2 = 5;


divide(num1, num2, (err, result) => {
    if (err) {
        console.log("Error is ", err);
    } else {
        console.log("Result is ", result);
    }
});

console.log("End of Script");


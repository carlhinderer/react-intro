// Calling Functions
console.log('Hello');


// Defining Functions
function testFunction() {
    console.log('Inside the function');
}

testFunction();


// Functions with Parameters
function myFunc(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}

myFunc("Adam", "sunny");


// Default Parameters
function myFunc2(name, weather = "raining") {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}

myFunc2("Adam"); 


// Rest Parameters
function myFunc3(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}

myFunc3("Adam", "sunny", "one", "two", "three");


// Returning Results
function myFunc4(name) {
    return ("Hello " + name + ".");
}

console.log(myFunc4("Adam")); 


// Pass Functions as Arguments
function myFunc5(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

function printName(nameFunction, printFunction) {
    printFunction(myFunc5(nameFunction));
}

printName(function () { return "Adam" }, console.log);


// Arrow Functions
const myFunc6 = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName2 = (nameFunction, printFunction) =>
    printFunction(myFunc6(nameFunction));

printName2(function () { return "Adam" }, console.log);
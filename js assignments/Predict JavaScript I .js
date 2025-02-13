//-----------------------1--------------------------//


const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)//tesla
console.log(otherRandomCar)//mercedes

// to acess the third element of the array 'honda' we can also use destructureing 
// const [, , thirdCar] = cars; console.log(thirdCar); 

//----------------------2---------------------------//

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { employeeName: otherName } = employee;

console.log(otherName); //Output: Elon
console.log(employeeName); //Error: employeeName is not defined

// because employeeName is not a variable in the scope the destructuring syntax explicitly renames it to otherName
//solution: access the property directly from the object
//console.log(employee.employeeName); // Output: Elon

//---------------------3----------------------------//

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;

console.log(password); //Output: 12345
console.log(hashedPassword); //Output: undefine

//the password variable is independent of the person object and retains its value '12345' while the hashedPassword variable is 
//undefined because the person object does not have a password property to destructure

//to ulter this code : to ensure that hashedPassword has a value without changing the console.log statements
//we can provide a default value during destructuring :const { password: hashedPassword = 'defaultPassword' } = person;

//----------------------4---------------------------//

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [,,, second] = numbers;
const [,,,,,,,, third] = numbers;
const [,,, fourthIndexValue] = numbers; // 5

console.log(first === second); //Output: false
console.log(first === third); //Output: true
console.log(fourthIndexValue); //Output: 5

//first is 2 (index 1) second is 5 (index 3) and third is 2 (index 8) The comparisons are straightforward: 2 === 5 is false
//and 2 === 2 is true

//----------------------5---------------------------//

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
const [, , , , , lastValue] = secondKey;

console.log(key); //Output: value
console.log(secondKey); //Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //Output: 1
console.log(willThisWork); //Output: 5
console.log(lastValue); //Output: 3

//the destructuring assignments correctly extracted the values from the lastTest object and the secondKey array and 
//the array destructuring syntax [, willThisWork] skips the first element and assigns the second element to willThisWork

//----------------------6---------------------------//

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//this code contains 3 scopes: 1/global Scope 2/function Scope of printNames 3/function Scope of actuallyPrintingNames
//clg: Paul was found at index 0
//     George was found at index 1
//     John was found at index 2
//     Ringo was found at index 3
//     name and index after loop is Ringo:4

//----------------------7---------------------------//

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}     

//the function actuallyPrintingNames tries to access names.length but names is not defined in the function's scope or globally
//the variables index and name are declared with let which means they are block-scoped and only accessible within the block where they are defined

//----------------------8---------------------------//

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(beatles);

//there are no errors in the code and it produces the expected output because it correctly iterates over the beatles array and logs each name 
//and its index because the use of const and let ensures that variables are scoped appropriately and cannot be accidentally reassigned
//-----------------------------------------------------------------------------------------------------------------------------------
//Why the Code Produced the Output ? :
//the printNames function is called with the beatles array as an argument
//the inner function actuallyPrintingNames iterates over the names array (the beatles array) using a for loop.$
//For each iteration the current name and index are logged to the console
//Since the beatles array contains ['Paul', 'George', 'John', 'Ringo'], the loop logs each name along with its corresponding index
//------------------------------------------------------------------------------------------------------------------------------------
//justification for each keyword used:
//const beatles:
//the beatles array is declared with const because it is not reassigned anywhere in the code Using const ensures that the variable cannot be accidentally reassigned
//let index:
//the loop variable index is declared with let because it is block-scoped and needs to be reassigned on each iteration of the loop
//const name:
//the name variable is declared with const because it is not reassigned within the loop iteration. A new name variable is created for each iteration due to block scoping
//-------------------------------------------------------------------------------------------------------------------------------------
//Possible Errors:
// if there were changes to the code the following errors could occur:
//reassigning const Variables:
//if you tried to reassign beatles or name (e.g., beatles = [] or name = 'New Name'), a TypeError would occur because const variables cannot be reassigned
//accessing Block-Scoped Variables Outside the Block:
//if you tried to access index or name outside the for loop, a ReferenceError would occur because let and const are block-scoped

//----------------------9---------------------------//

const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
};
const planetCopy = { ...planet };

  console.log(planet.composition[0] === planetCopy.composition[0]); //Output: true
  console.log(planet === planetCopy); //Output: false


//console.log(planet.composition[0] === planetCopy.composition[0]); -------> this outputs true because 
//both planet.composition[0] and planetCopy.composition[0] refer to the same value ("gas") the composition array is shared between the two objects due to the shallow copy
//console.log(planet === planetCopy); -------> This outputs false because planet and planetCopy are two 
//separate objects in memory the === operator checks for reference equality and since they are not the same object the comparison is false
//-----------------------------------------------------------------------------------------------------------------------------------
// 1* console.log(planet.composition[0] === planetCopy.composition[0]);:
//This compares the first element of the composition array in planet with the first element of the composition array in planetCopy
//Since planetCopy is a shallow copy the composition array in planetCopy is the same reference as the composition array in planet therefore planet.composition[0] and planetCopy.composition[0] 
//both point to the same value ("gas") the comparison "gas" === "gas" evaluates to true.
// 2* console.log(planet === planetCopy);:
//this compares the planet object with the planetCopy object even though planetCopy is a shallow copy of planet it is a new object in memory
//the === operator checks for reference equality meaning it checks if both objects point to the same memory location
//since planet and planetCopy are two distinct objects in memory the comparison evaluates to false



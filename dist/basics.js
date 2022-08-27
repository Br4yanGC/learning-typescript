"use strict";
/* Number, string, boolean */
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        return result;
    }
    else {
        return result;
    }
}
let number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
/*
const result = add(number1, number2, printResult, resultPhrase);
*/
/* Objects, arrays, tuples */
const person = {
    name: 'Brayan',
    age: 17,
    hobbies: ['Watch movies', 'Videogames', 'Football'],
    role: [2, 'Author']
};
/*
console.log(person.name);
console.log(person.age);
for (const hobby of person.hobbies){
    console.log(hobby);
}
for (const element of person.role){
    console.log(element);
}
*/
// Elements edition in tuples
person.role[0] = 1; // if = 'Editor' ¡Error!
person.role[1] = 'Editor'; // if = 1 ¡Error!
/*
for (const element of person.role){
    console.log(element);
}
*/
// Elements adition in tuples
person.role.push('Author');
person.role.push(13);
/*
for (const element of person.role){
    console.log(element);
}
*/
// Array with elements with any type
let favoriteActivities = ['Sleep', 'Football'];
let mixArray = ['Sleep', 13, 'Football'];
/* Enum */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
;
// By deffault starts in 0
const student = {
    name: 'Brayan',
    career: 'CS',
    age: 17,
    role: Role.ADMIN
};
/* Union types */
function combine(input1, input2, 
// Literal types
resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
/*
const combinedAges0 = combine(30, 26, 'as-number');
console.log(combinedAges0);

const combinedNames = combine('Mario', 'Hugo', 'as-text');
console.log(combinedNames);

const combinedAges1 = combine('15', '13', 'as-number');
console.log(combinedAges1);
*/
/* Function return types and void */
function fAdd(n1, n2) {
    return n1 + n2;
}
function fPrintResult(num) {
    console.log('Result: ' + num);
}
/*
fPrintResult(fAdd(5, 12));
*/
/* Function types */
let combineValues;
//combineValues = fPrintResult; ¡Error!
combineValues = fAdd;
/*
console.log(combineValues(13, 4))
*/
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
/*
addAndHandle(10, 20, (result) => {
    // () => {} : Anonymous function
    console.log(result);
})
*/
/* Unknown types */
let userInput;
let userName;
userInput = 5;
userName = 'Glaceon';
// userName = userInput; ¡Error!
/* Unknown type is like any type but with the previous showed definition */
/* Never types */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
/*
generateError('An error ocurred!', 500);
*/
// Vista de aprovación

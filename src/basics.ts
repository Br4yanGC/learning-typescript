/* Number, string, boolean */
function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        return result;
    }
    else{
        return result;
    }
}

let number1: number = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase: string = 'Result is: ';
/*
const result = add(number1, number2, printResult, resultPhrase);
*/

/* Objects, arrays, tuples */
const person: {
    name: string;
    age: number;
    hobbies: string[];
    // Note: In a tuple we can have a set of elements of different types
    role: [number, string]
} = {
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
let favoriteActivities: string[] = ['Sleep', 'Football'];
let mixArray: any[] = ['Sleep', 13, 'Football'];


/* Enum */
enum Role { ADMIN=1, READ_ONLY=2, AUTHOR=3 };
// By deffault starts in 0
const student: {
    name: string;
    career: string;
    age: number
    role: Role
} = {
    name: 'Brayan',
    career: 'CS',
    age: 17,
    role: Role.ADMIN
};

/* Type aliases */
type Combinable = number | string;

/* Union types */
function combine(
    input1: Combinable,
    input2: Combinable,
    // Literal types
    resultConversion: 'as-number' | 'as-text'
){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }
    else{
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
function fAdd(n1: number, n2: number): number{
    return n1 + n2;
}
function fPrintResult(num: number): void{
    console.log('Result: ' + num);
}

/*
fPrintResult(fAdd(5, 12));
*/

/* Function types */
let combineValues: (a: number, b: number) => number;
//combineValues = fPrintResult; ¡Error!
combineValues = fAdd;

/*
console.log(combineValues(13, 4))
*/

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void{
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
let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'Glaceon';
// userName = userInput; ¡Error!
/* Unknown type is like any type but with the previous showed definition */

/* Never types */
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

/*
generateError('An error ocurred!', 500);
*/

// Vista de aprovación

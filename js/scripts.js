// alert( "Hello, World! JavaScript is loaded!" );

// single line comment
/** multi line comments

*/

var myFirstVariable = "Hello";


let mySecondVariable = "World";

const myThirdVariable = myFirstVariable + ", " + mySecondVariable;

//data types

const myString = "this is a string";
const myInteger = 34;
const myFloat = 16.782; // int and floats are technically the same datatypes.
const myNaN = NaN;

const myTrueBool = true;
const myFalseBool = false;

const myNull = null;
const myUndefined = undefined;

const myArray = [
    myString,
    myInteger,
    myFloat,
    myNaN,
    myTrueBool,
    myFalseBool,
    myNull,
    myUndefined
];



console.log("Hello to the browser console");
console.log ( myArray);

console.log( 10 % 3); // we can also just throw in an expresseion and see what it evalueates to 

//concatenation and template literals

const myName = "Warren";
const concattedString = "Hello, " + myName + "!";
console.log( concattedString );

console.log( 3 + 3 );
console.log( 3 + "3"); //string 33
console.log( 3 + 3 + "3");  //addition and concatenation

console.log( 3 + 3 + Number( "3") );

console.log( String(3) + String(3) + "3" );

console.log( parseInt( 38.957) );

//template literals Equivalent

// const concattedString = "Hello, " + myName + "!";

const templateLiteralString = `Hello, ${myName}!` ; //template literals must be inside back ticks"`" not single quotes " ' ".
console.log( templateLiteralString );

//back
console.log( `
This is a string in backticks (\`).
It is whit-space and new line sensitive!
Great for formatting your outputs.

====

an example of a use for a template literal could be...
our array: myarray is ${myArray.length} items long.
index includes the valvue: ${myArray[4]}
All template literals are wrapped in: "\${}"

` );

// Loops in JavaScript.

console.log( "While Loop Practice:\n =========");
let myWhileIterator = 5;

while( myWhileIterator > 0  )
{
console.log( `While iterator: ${myWhileIterator}` );
myWhileIterator--;
}

console.log( "For  of Loop Practice:\n =========");
const myForArray = ["Wal-Mart", "Best Buy", "Supersotre", "Safeway"];
for ( const arrayItem of myForArray) 
{
    console.log(`This array item in our loop contains: ${arrayItem}`);
}

console.log( "For Loop Practice:\n =========");
for ( let myForIterator = -5; myForIterator < 30; myForIterator += 10)
    //assignment               condition            iteration
{
    console.log( `This iteration of our for loop's value is: ${myForIterator}` );
}

// Function in JavaScript

function myAdditionFunction ( num1 = 0, num2 = 0 )
{
return Number ( num1 ) + Number ( num2 );
}

const add2And4 = myAdditionFunction ( 2, 4 );
console.log( add2And4 );

console.log( myAdditionFunction ( -15, 35 ));

console.log( myAdditionFunction ( 3.14, 67 ));

function mySubtractionFunction ( num1, num2 ) {
    const difference = num1 - num2;
    
    return difference;
}

console.log( mySubtractionFunction(100, 50));

//Fat-arrow function syntax, as an alternative.
/*
const / let for our declaration
the name of our function
assignment operator
parenthesis "()" with any parameters inside.
"fat arrow" marking the beginning of function logic.
here we have two options:
    1) what follows the fat arrow will simply
    2)
*/

const myDivisionFunction = ( num1, num2 ) => num1 / num2;

console.log ( "Division (36,3): " + myDivisionFunction(36, 6));

const myMultiplicationFunction = ( num1 = 0, num2 = 0) => {
    const product = num1 * num2;
    return product;
};

console.log( "Multiplication (3, 9): " + myMultiplicationFunction(3,9));

/* JavaScript Object */

const myPersonInfoArray = [
    "Herny",
    38,
    ["Skydiving", "Programming", "Mountain Climbing"]
];


console.log ( "Person as an array:" );
console.log ( myPersonInfoArray );
console.log ( `Name is: ${myPersonInfoArray[0]}`);

const myObject = {
    name: "Henry",
    age: 38,
    hobbies: ["Skydiving", "Programming", "Mountain Climbing"]
};

console.log ( "Person as an object:" );
console.log ( myObject );
console.log ( `Name is: ${myObject.name} Age is: ${myObject.age}` );
































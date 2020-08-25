// alert( "DOM OOP JS added!" ); // The file is loaded

const myObj = {
    name: "Joe",
    age: 35,
    hobbies: [ "Movies", "Pottery" ]
};

console.log( `My name is ${myObj.name}. I am ${myObj.age} years old!` );

console.log( myObj );

// JSON (JavaScript Object Notation)
const secondPersonString = `{
    "name": "Sarah",
    "age": 29,
    "hobbies": [ "Deep Sea Fishing", "Cycling" ]
}`;

console.log( secondPersonString );

const secondPersonObj = JSON.parse( secondPersonString );
console.log( secondPersonObj );




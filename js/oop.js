// alert( "DOM OOP JS added!" ); // The file is loaded

const myObj = {
    name: "Joe",
    age: 35,
    hobbies: [ "Movies", "Pottery" ]
};

console.log( `My name is ${myObj.name}. I am ${myObj.age} years old!` );

console.log( myObj );

const myObjString = JSON.stringify( myObj );
console.log( myObjString );


// JSON (JavaScript Object Notation)
const secondPersonString = `{
    "name": "Sarah",
    "age": 29,
    "hobbies": [ "Deep Sea Fishing", "Cycling" ]
}`;

console.log( secondPersonString );

const secondPersonObj = JSON.parse( secondPersonString );
console.log( secondPersonObj );

//Classes (Blueprints for a "Type" of object)


class Person
{
    constructor ( name = "", age = 0, hobbies = [])
    {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;

    }
}

const jane = new Person(
    "Jane",
    34,
    ["Sewing", "Cross-Country Skiing"]
    );

console.log( jane );
console.log( jane instanceof Person );



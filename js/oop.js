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

    sayHello ()
    {
        const helloP = document.createElement( "p");
        helloP.textContent = `Hello there! I am ${this.name}, nice to meet you!`;

        document.body.appendChild( helloP );
    }
    birthday ()
    {
        this.age++;  // thi.age = this.age +1; or +=1;
        const bDayH2 = document.createElement( 'H2' );
        bDayH2.textContent = "Birthday Detected!";
        document.body.appendChild( bDayH2 );
        const bdayP = document.createElement( 'P' );
        bdayP.textContent = `${this.name} is now ${this.age} years old!` ;
        document.body.appendChild( bdayP );
    }

    outputHobbies ()
    {
        const hobbiesP = document.createElement ( 'P' );
        hobbiesP.textContent = `${this.name}'s hobbies included:` ;
        document.body.appendChild( hobbiesP );

        const hobbiesUL = document.createElement( 'UL' );
        for ( const hobby of this.hobbies )
        {
            const hobbyLI = document.createElement( 'LI');
            hobbyLI.textContent = hobby;
            hobbiesUL.appendChild( hobbyLI );
        }

        document.body.appendChild( hobbiesUL );
    }

}

const jane = new Person(
    "Jane",
    34,
    ["Sewing", "Cross-Country Skiing"]
    );

console.log( jane );
console.log( jane instanceof Person );

//run the sayHello
jane.sayHello();

console.log( jane.age );

jane.birthday();

console.log( jane.age );

const dimitri = new Person(
    "Dimitri",
    41,
    ["Painting", "Driving"]
);

console.log( dimitri );
console.log( `my name is ${dimitri.name}. i am ${dimitri.age} years old!`);

dimitri.sayHello();

dimitri.outputHobbies();






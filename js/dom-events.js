// alert( "DOM Events JS added!" );
// console.log ("Dom Events JS loaded");

//Targeting via the DOM in JavaScript

const myH2 = document.getElementById( 'target-me' );
console.log ( myH2 );


//let's try  to grab paragraph

const myP = document.querySelector( '#target-me + p');

console.log( myP );

const hoverButton = document.querySelector( 'p > button' );
console.log( hoverButton );

const firstSpan = document.querySelector ('p > span:nth-child(2)');
console.log( firstSpan );

const clickButton = document.querySelector( 'p >button:nth-of-type(2) ');
console.log( clickButton );

const secondSpan = document.querySelector ('p > span:nth-child(4)');
console.log( secondSpan );


//we can use JS to update /replace content in elements.
myH2.textContent = "This H2 was found and updated!";
console.log( 'Outputted string into our <h2> element!');

myH2.className = 'salmon-coloured-text';
console.log ( 'Change the H2 fond colour to "salmon"');

//event listeners.
//we can add listerns to elements they listen for user actions.
//when a user action is detedcted we can have our JS follow a set of instruction.

console.log( firstSpan.classList);
hoverButton.addEventListener( 'mouseenter', () => {
    console.log( 'The mouse has entered the button!');
    firstSpan.classList.add( 'salmon-coloured-text');
    console.log( firstSpan.classList);
} );

hoverButton.addEventListener( 'mouseleave', () => {
    console.log( 'The mouse has left the button!');
    firstSpan.classList.remove( 'salmon-coloured-text');
    console.log( firstSpan.classList);

} );


// alert ( "DOM events form");

const helloForm = document.querySelector( 'form' );
console.log( helloForm );

const nameField = document.getElementById( 'your-name' );
console.log( nameField );

const helloList = document.querySelector( '#hello-list' );
console.log ( helloList );

//Event Listerner

helloForm.addEventListener( 'submit', ( event ) => {
    event.preventDefault();
    console.log( event );
    console.log( event.target );

     // how do we get our value from our form field?

    const name = nameField.value;
    console.log( name );

    //how do i make a new LI element?
    const newLI = document.createElement( 'LI' );
    console.log( newLI );

    //How do i insert a valuve/text into the LI element?

    newLI.textContent = `Hello, ${name}!`;
    console.log( newLI.textContent );
    console.log( newLI );

    //how do i add the LI element to the page

    helloList.appendChild( newLI );
    
    //
    
   
    });
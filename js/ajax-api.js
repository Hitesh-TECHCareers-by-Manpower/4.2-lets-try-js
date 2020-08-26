// alert ("hello");

/**
 * AJAX (Asynchronous JavaScripts and XML)
 * 
 */

 // first argument in "fetch" should be the URL or resource.
 // if this is URL is an API, we refer to this as an "endpoint."
 fetch( 'http://api.open-notify.org/astros.json' )
    .then( response => response.json() )

    .then( data => { 
        console.log( data ); 

    console.log (data);

    const people = data.people;
    console.log( people );

        const peopleUL = document.createElement( 'UL');
        for ( const person of people )
        {
            const personLI = document.createElement( 'LI' );
            personLI.textContent = `On the ${person.craft} craft, astronaut "${person.name}" is present!`;

            peopleUL.appendChild( personLI );

        }
        document.body.appendChild ( peopleUL );
    } );







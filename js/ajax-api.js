// alert( "AJAX API JS loaded!" ); // Check if the file is loading!

/**
 * AJAX (Asynchronous JavaScript And XML)
 * ======================================
 * Lets us use JavaScript to request information from separate
 * URLs (make separate HTTP/HTTPS requests) post-initial page-
 * load.
 * Despite AJAX referring to XML, we are /usually/ dealing with
 * JSON-formatted data responses here in 2020.
 * The modern way to make AJAX requests with JS usually entails
 * use of the built-in "fetch()" function/feature.
 */

// First argument in "fetch" should be the URL (or resource.)
// If this is URL is an API, we refer to this as an "endpoint."
fetch( 'http://api.open-notify.org/astros.json' )
  // Our function returns a JS object (converted from our 
  // JSON string that the API provides.) 
  .then( response => response.json() )
  // Let's check to see if our object is here!
  .then( data => {
    // Check data... it is an object with properties!
    console.log( data );
    // Grab the people from the object.
    const people = data.people; // The array is in the "people" property.
    console.log( people ); // This should be the array!
    // Let's prep some HTML for output in the browser.
    const peopleUL = document.createElement( 'UL' );
    // Let's loop through the people, and add each one to the list...
    for ( const person of people )
    { // Let's set up our element.
      const personLI = document.createElement( 'LI' );
      // Fill it up with text...
      personLI.textContent = `On the ${person.craft} craft, astronaut "${person.name}" is present!`;
      // ...and send it on its way! Into the UL we prepped.
      peopleUL.appendChild( personLI );
    } // Don't forget to add the UL to the browser so we can see it!
    document.body.appendChild( peopleUL );
  } )

  .catch( error => {
      console.log( error );
  } );

  /**
   * Let's see about grabbling live data based on timer
   */

    const latDD = document.getElementById( 'lat' );
    const longDD = document.getElementById( 'long' );
        console.log( latDD );
        console.log( longDD );

//add a function that grabs data from our API and updates the element

    const updateLatLong = () => {
        fetch ( 'http://api.open-notify.org/iss-now.json' )
        .then( response => { return response.json(); } )
        .then( data => {
            console.log( data );

            const lat = data.iss_position.latitude;
            const long = data.iss_position.longitude;

            latDD.textContent = lat;
            longDD.textContent = long;

        }   )
        .catch( error => {console.log( error ); } );
    }

    updateLatLong();

    //add a repeating "timer" so that this funcion can repeat.

    setInterval( updateLatLong, 1500 ); // repeat updateLatLong every 1.5 seconds (1500 ms.)

    









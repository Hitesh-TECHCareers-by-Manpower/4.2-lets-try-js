// alert ("hello");

/**
 * AJAX (Asynchronous JavaScripts and XML)
 * 
 */

 // first argument in "fetch" should be the URL or resource.
 // if this is URL is an API, we refer to this as an "endpoint."
 fetch( 'http://api.open-notify.org/astros.json' )
    .then( response => response.json() )

    .then( data => { console.log( data ); } );

    






console.log("Hello World, support me here --> https://paypal.me/IBuncic or https://patreon.com/ivanbuncic/memberships. Thank you from the deepest depth of my heart. Deepest bow. And a kiss.");
$( function() {
    $( "li" ).on( "click", function() {
      $( ".navigation__checkbox:checked").toggleClass( ".navigation__background,.navigation__nav", 300 );
    });
  } );

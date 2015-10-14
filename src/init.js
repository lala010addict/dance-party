$(document).ready(function(){
  window.dancers = [];
  
  setInterval( function(){
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer1 = window.dancers[i];
      for (var j = i+1; j < window.dancers.length; j++) {
        var dancer2 = window.dancers[j];
        var distantLeft = dancer1.left - dancer2.left;
        var distantTop = dancer1.top - dancer2.top;
        if (Math.abs(distantLeft)<= 200 && Math.abs(distantTop)<= 200 ) {   
          dancer1.$node.toggle( "explode" );
          dancer2.$node.toggle( "explode" );
        }
      }
    }
  }, 3000);

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event) {
    var position = 0;
    window.dancers.forEach(function(dancer) {
      dancer.lineUp(position);
      position += 200;
    });
  });

});


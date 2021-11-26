//  USING JQUERY

// Align instructions properly according to the height of infographic

$(document).ready(
  function(){
    var h = $('#location').height();
    $('#instructions').css({ 'height': h });
  }
);


//Executes when the window is resized
$(window).resize(function() {
  var h = $('#location').height();
  $('#instructions').css({ 'height': h });
});

// -----------------------------------------------------------------------

// toggle the images based on area clicks
$(document).ready(
  function(){
    $('.areas').click(
      function(event){
        $areaId=event.target.id.slice(-2);
        $pathId=$("#path"+$areaId);
        $('.paths').hide();
        $pathId.show();
      }
    );
  }
);


// -----------------------------------------------------------------------

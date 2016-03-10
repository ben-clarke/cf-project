// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function() {

  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $("textarea").css("background", "rgb(182, 204, 241)");

  $(".button").on("click", function() {
    var comment = $(".message-box").val();
    console.log("clicked");
    return false;
  });

  $(".button").on("click", function() {
  	console.log("clicked");
  	var comment = $(".message-box").val();
  	console.log(comment);

    $("#visible-comment").html(comment);

    //2conditional//
    if($(".message-box").val() == 0) {
      $(".message-box").css("border-color", "red");
    } else {
      $(".message-box").hide();
    }
  });

  $(".message-box").on("keyup", function() {
    console.log("keyup happened");

	var charCount;
    $(".message-box").on("keyup", function() {
      console.log("keyup happened");

      var textlength = 3;
      var text = "string";
      charCount = $(".message-box").val().length;

      console.log(charCount);
      $("#char-count").html(charCount);

      if(charCount > 50) {
        $("#char-count").css("color", "red");
      } else {
        $("#char-count").css("color", "black");
      };
    });
  });

  // works
  for(var i = 0; i < works.length; ++i ) {
    console.log(works[i]);
    $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <img class='img-responsive' src='" + works[i] +"'>\
    </div>\
    ");
  };

  // Google Map
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

});

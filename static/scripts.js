$( document ).ready(function() {
  $("#language-switch-btn").click(function() {
    $("#language-switch").toggleClass("is-active"); 
  });
  
  $('#language-switch-menu a').click(function() {
    $('#language-switch').removeClass("is-active");
  });

  lightGallery(document.getElementById('lightgallery'), {
    thumbnail: true
  });
  lightGallery(document.getElementById('lightgallery2'), {
    thumbnail: true
  });
});


$( document ).ready(function() {
  $(".nav li").on("click", function(){
    $(".nav").find(".active-nav-element").removeClass("active-nav-element");
    $(this).addClass("active-nav-element");
  });
});

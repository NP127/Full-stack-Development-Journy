$("h1").css("color", "blue");
$("body").keypress(function(event){
  $("h1").text(event.key);
})
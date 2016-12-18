$(document).ready(function() {

$("#images a").each(function(){
  var imgCaption = $(this).children("img").attr("alt");
  $(this).attr("data-title",imgCaption);
});

});
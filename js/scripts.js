$(document).ready(function() {
$("form#hogwarts").submit(function(event) {

$("#troy").text = "";
var whistle =$("input#age").val();
for (i=1; i<=whistle; i++){
  $("#troy").prepend("<p>" + i +" Bottles of beer on the wall " + i + " bottles of beer, take one down pass it around " + (i-1) + " bottles of beer on the wall</p>");
  $("p:eq(3)" ).remove();
}


var classicalVar = $("#classical1").val()
if(classicalVar === "classical") {
  $("#classicalIframe").show();
}
var hiphopVar = $("#hiphop1").val()
if(hiphopVar === "hiphop") {
  $("#hiphopeIframe").show();
}
var countryVar = $("#country1").val()
if(countryVar === "country") {
  $("#countryIframe").show();
}var celineVar = $("#celine1").val()
if(celineVar === "celine") {
  $("#celineIframe").show();
}

event.preventDefault();


});


});

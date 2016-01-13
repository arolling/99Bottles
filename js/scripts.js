$(document).ready(function() {
alert("Your Three Options: Star Wars, Star Trek, Lord Of The Rings");
var option = prompt("What's your fantasy world of choice?");

if (option === "Star Wars") {
$(".starwars").show();
} else if (option ==="Star Trek") {
  $(".startrek").show();
} else if (option ==="Lord Of The Rings") {
$('.lordoftherings').show();
}else {
  $(".fail").show();
}
});

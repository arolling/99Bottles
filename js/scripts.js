$(document).ready(function() {

$("form#hogwarts").submit(function(event) {

var age = parseInt($("input#age").val());
var gender = $("select#gender").val();

$(".wu h1").hide()


if (age>=50 && gender==='male') {
$('.oldm').show()
} else if (age<50 && gender ==='male') {
  $('.youngm').show()
} else if (age>=50 && gender==="female"){
  $('.oldw').show()
} else if (age<50 && gender ==='female') {
  $('.youngw').show()
} else if (age>=50 && gender==='other'){
  $('.oldo').show()
} else if (age <50 && gender ==='other') {
  $('.youngo').show()

}
$("#age").empty(
  $("#age").addClass("red"),
alert('Please enter your age.') );
event.preventDefault();

});

});

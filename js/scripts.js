// business logic
// var palindrome = function(string) {
//
// }


// user interface logic
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var string = $("input#string").val();

    var array1 = Array.from(string);

    var revArray = array1.reverse();

    var revString = revArray.join('');

    $(".phrase").text(string);

    if (string === revString) {
      $(".not").text("");
    } else {
      $(".not").text("not");
    }

    $("#result").show;

    console.log();
    debugger;
  });
});

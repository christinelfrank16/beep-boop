$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#num").val());
    var output = createExceptions(userInput);
    $("#output").text(output);
  });
});

function createExceptions(num){
  return num;
}

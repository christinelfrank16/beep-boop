$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#num").val());
    var output = createMsgExceptions(userInput);
    $("#output").text(output);
  });
});

function createMsgExceptions(num){
  if(!num){
    alert("Input not accepted. Please enter a number.");
  }

  return num;
}

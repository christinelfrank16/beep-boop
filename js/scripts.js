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
    alert("Please enter a number.");
  } else {
    var range = [];
    for (var count=0; count <= num; count++){
      range.push(count);
    }
  }

  return range;
}

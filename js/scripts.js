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

    var messages = ["\"Beep!\""];
    var outputValues = range.map(function(rangeNum){
      var rangeString = rangeNum.toString();
      if(rangeString.includes("1")){
        return messages[0];
      }
      else {
        return rangeNum;
      }
    });
  }
  return outputValues;
}

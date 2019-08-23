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

    var exceptionMsgs = ["\"Beep!\"", "\"Boop!\"", "\"I'm sorry Dave. I'm afraid I can't do that.\""];
    var outputValues = range.map(function(rangeNum){
      for(var msgIndex = exceptionMsgs.length; msgIndex > 0; msgIndex-=1){
        var rangeString = rangeNum.toString();
        if(rangeString.includes(msgIndex.toString())){
          return exceptionMsgs[msgIndex-1];
        }
      }
      return rangeNum;
    });
  }
  return outputValues;
}

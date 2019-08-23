///////////  User Interface  ///////////

$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    $("#output ul").text('');
    var userInput = parseInt($("input#num").val());
    var output = generateOutputRange(userInput);
    output.forEach(function(outputValue){
      $("#output ul").append(`<li> ${outputValue} </li>`);
    });
  });
});



///////////  Business Logic  ///////////

function generateOutputRange(input){
  if(!input){
    alert("Please enter a number.");
  } else {
    var range = createRangeValues(input);
    var finalRangeValues = checkExceptions(range);
    return finalRangeValues;
  }
}


function createRangeValues(num){
  var range = [];
  for (var count=0; count <= num; count++){
    range.push(count);
  }
  return range;
}


function checkExceptions(rangeArray){
  var exceptionMsgs = [
    "\"Beep!\"",
    "\"Boop!\"",
    "\"I'm sorry Dave. I'm afraid I can't do that.\""
  ];

  var updatedRangeArray = rangeArray.map(function(rangeNum){
    for(var msgIndex = exceptionMsgs.length-1; msgIndex >= 0; msgIndex-=1){
      var rangeString = rangeNum.toString();
      if(rangeString.includes((msgIndex+1).toString())){
        return exceptionMsgs[msgIndex];
      }
    }
    return rangeNum;
  });
  return updatedRangeArray;
}

///////////  User Interface  ///////////

$(document).ready(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();
    $("#output ul").text('');
    var userNameInput = $("input#name").val();
    var userNumberInput = parseInt($("input#num").val());
    var output = generateOutputRange(userNameInput, userNumberInput);
    output.forEach(function(outputValue){
      $("#output ul").append(`<li> ${outputValue} </li>`);
    });
  });
});



///////////  Business Logic  ///////////

function generateOutputRange(name, number){
  var range = createRangeValues(number);
  name = formatName(name);
  var finalRangeValues = checkExceptions(name, range);
  return finalRangeValues;
}


function createRangeValues(num){
  var range = [];
  for (var count=0; count <= num; count++){
    range.push(count);
  }
  return range;
}

function formatName(name){
  name = name.toLowerCase();
  if(name.includes(" ")){
    name = name.substring(0, name.indexOf(" "));
  }
  name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return name;
}

function checkExceptions(name, rangeArray){
  var exceptionMsgs = [
    "\"Beep!\"",
    "\"Boop!\"",
    "\"I'm sorry Dave. I'm afraid I can't do that.\""
  ];


  var updatedRangeArray = rangeArray.map(function(rangeNum){
    for(var msgIndex = exceptionMsgs.length-1; msgIndex >= 0; msgIndex-=1){
      var rangeString = rangeNum.toString();
      var exceptionMsg = exceptionMsgs[msgIndex];
      if(exceptionMsg.includes("Dave") && rangeNum % 3 === 0){
        exceptionMsg = exceptionMsg.replace("Dave", name);
      }
      if(rangeString.includes((msgIndex+1).toString())){
        return exceptionMsg;
      }
    }
    return rangeNum;
  });
  return updatedRangeArray;
}

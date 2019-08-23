///////////  User Interface  ///////////

$(document).ready(function(){
  $("#output-panel").hide();
  $("form#user-input").submit(function(event){
    event.preventDefault();
    $("#output-panel").hide();
    $("#output ul").text('');
    var userNameInput = $("input#name").val();
    var userNumberInput = parseInt($("input#num").val());
    var output = generateOutputRange(userNameInput, userNumberInput);
    output.forEach(outputValue => buildList(outputValue));
    $("#output-panel").fadeToggle();
  });
});

function buildList(outputValue){
  if(outputValue.toString().includes("Beep")){
    return $("#output ul").append(`<li class="beep"> ${outputValue} <img class="car" src="img/beep.png"></li>`);
  } else if(outputValue.toString().includes("Boop")){
    return $("#output ul").append(`<li class="boop"> ${outputValue} <img class="pup" src="img/boop.jpg"></li>`);
  } else if(outputValue.toString().includes("Dave")){
    return $("#output ul").append(`<li class="dave"> ${outputValue} </li>`);
  } else if(outputValue % 2 === 0){
    return $("#output ul").append(`<li class="even"> ${outputValue} </li>`);
  } else if((Math.floor(Math.random()*6)+1) % (Math.floor(Math.random()*6)+1) === 0){
    return $("#output ul").append(`<li class="other"> ${outputValue} </li>`);
  } else {
    return $("#output ul").append(`<li> ${outputValue} </li>`);
  }
}

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

  var regex = /[a-z]/;
  if(name.includes(" ")){
    name = name.substring(0, name.indexOf(" "));
  }

  var updatedName = "";
  for(var char = 0; char < name.length; char++){
    if(regex.test(name[char])){
      updatedName += name[char];
    }
  }

  updatedName = updatedName.charAt(0).toUpperCase() + updatedName.substring(1, updatedName.length);
  return updatedName;
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

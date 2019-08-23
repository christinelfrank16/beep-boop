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
    $("#analysis").hide();
  });

  $("#analysis-btn").click(function(){
    $("tbody").text('');
    var listItems = [];
    $("#output ul li").each(function(){
      listItems.push($(this));
    });
    var dataObject = performAnalysis(listItems);
    buildAnalysisTable(dataObject);
    $("#analysis").show();
  });
});

function buildAnalysisTable(dataHolder){
  var dataProps = Object.keys(dataHolder);
  dataProps.forEach((propName, index) => buildRow(dataHolder, propName, index));
}

function buildRow(dataHolder, propName, index){
  if(propName !== "totalCount"){
    var markup = `
      <tr>
        <th scope="row">$INDEX$</th>
        <td>$NAME$</td>
        <td>$COUNT$</td>
        <td>$FREQ$</td>
      </tr>
        `;
    markup = markup.replace("$INDEX$", index);
    markup = markup.replace("$NAME$", dataHolder[propName].name);
    markup = markup.replace("$COUNT$", dataHolder[propName].count);
    markup = markup.replace("$FREQ$", dataHolder[propName].frequency);
    $("tbody").append(markup);
  }
}

function buildList(outputValue){
  if(outputValue.toString().includes("Beep")){
    return $("#output ul").append(`<li class="beep">${outputValue}<img class="car" src="img/beep.png"></li>`);
  } else if(outputValue.toString().includes("Boop")){
    return $("#output ul").append(`<li class="boop">${outputValue}<img class="pup" src="img/boop.jpg"></li>`);
  } else if(outputValue.toString().includes("Dave")){
    return $("#output ul").append(`<li class="dave">${outputValue}</li>`);
  } else if(outputValue % 2 === 0){
    return $("#output ul").append(`<li class="even">${outputValue}</li>`);
  } else if((Math.floor(Math.random()*6)+1) % (Math.floor(Math.random()*6)+1) === 0){
    return $("#output ul").append(`<li class="other">${outputValue}</li>`);
  } else {
    return $("#output ul").append(`<li>${outputValue}</li>`);
  }
}

///////////  Business Logic  ///////////

function performAnalysis(listItems){
  data = {};
  var data = addDataTypes(listItems, data);
  data = countData(listItems, data);
  data = calcFrequency(data);
  return data;
}

function addDataTypes(listItems, dataHolder){
  dataHolder.number = {
    name: 'Numbers',
    count: 0
  }
  dataHolder.font = {
    name: 'Special Font Effects',
    count: 0
  }

  listItems.forEach(function(listItem){
    if(!Object.keys(dataHolder).includes(listItem.text()) && listItem.text().includes("\"")) {
      dataHolder[listItem.text().toLowerCase()] = { name: listItem.text(), count: 0 }
    }
  });
  return dataHolder;
}

function countData(listItems, dataHolder){
  dataHolder.totalCount = listItems.length;
  listItems.forEach(function(listItem){
    if(!listItem.text().includes("\"")){
      dataHolder.number.count += 1;
    }
    if(listItem[0].className === "other"){
      dataHolder.font.count += 1;
    }
    var dataProps = Object.keys(dataHolder);
    if(dataProps.length > 2){
      for(var index = 2; index < dataProps.length; index++){
        var propName = dataProps[index];
        if(listItem.text().toLowerCase() === propName){
          dataHolder[propName].count += 1;
        }
      }
    }
  });
  return dataHolder;
}

function calcFrequency(dataHolder){
  var dataProps = Object.keys(dataHolder);
  var totalCount = dataHolder.totalCount;

  dataProps.forEach(function(propName){
    var count = dataHolder[propName].count;
    dataHolder[propName].frequency = (Math.round((count/totalCount)*100)).toString() + "%"
  });
  return dataHolder;
}

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

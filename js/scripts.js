//Business logic
function returnList(inputNumber){
  var result = [];

  if(inputNumber.toString().indexOf('3') >= 0){
    result.push("I'm sorry, Dave. I'm afraid I can't do that.")
    return result;
  } if(inputNumber.toString().indexOf('2') >= 0){
    result.push("Boop!")
    return result;
  } if(inputNumber.toString().indexOf('1') >= 0){
    result.push("Beep!")
    return result;
  } else {

  for(i = 0; i <= inputNumber; i++){
      if(i.toString().indexOf('3') >= 0){
        result.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if(i.toString().indexOf('2') >= 0){
        result.push("Boop!");
      } else if(i.toString().indexOf('1') >= 0){
        result.push("Beep!");
      } else {
      result.push(i);
      }
  }
  return result;
}
}

// Front end logic
$(document).ready(function(){
  $(".theForm").submit(function(event){
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    $("#printResult").text(returnList(inputNumber));
    $("img").show();
  });
});

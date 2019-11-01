function returnList(inputNumber){

  var result = [];
  for(i = 0; i < inputNumber; i++){
    while(i < inputNumber){
      result += [i];
      alert(result);
      i++;
    }
  }
  return result;
  console.log(result);
}





$(document).ready(function(){
  $(".theForm").submit(function(event){
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    $("#printResult").append(returnList(inputNumber));


  });
});

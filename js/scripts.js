$(document).ready(function(){
  $("#groceryform").submit(function(event) {
    $("#result").show();
    $("form").hide();
    event.preventDefault();
    var blanks = ["groceryItem1", "groceryItem2", "groceryItem3", "groceryItem4", "groceryItem5"];
    var tempArr = [];

    blanks.forEach(function(blank){
      var groceryInput = $("input#" + blank).val();
      tempArr.push(groceryInput.toUpperCase());
    });

    var alphaArr = tempArr.sort();

    alphaArr.forEach(function(groceryInput){
      $(".resultList").append("<li>" + groceryInput + "</li>");
    })
  });

  $("#reload").click(function(){
    location.reload();
  });

});

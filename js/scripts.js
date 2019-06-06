$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    if (side1 === side2 && side2 === side3) {
      $("#triangle-type").text("equilateral");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#triangle-type").text("isoscles");
    } else {
      $("#triangle-type").text("scalene");
    }
    $("#output").show();
  })
})

$(document).ready(function() {

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users/checkout"
  // }).done((items) => {
  //   for(item of items) {
  //     $("<div>").text(item).appendTo($("body"));
  //   }
  // });

  $(".fas.fa-plus-circle").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().siblings().find("input").val();
    var newVal = parseFloat(oldValue) + 1;
    $button.parent().siblings().find("input").val(newVal);
  });

  $(".fas.fa-minus-circle").on("click", function() {
   // Don't allow decrementing below zero
    var $button = $(this);
    var oldValue = $button.parent().siblings().find("input").val();
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      var newVal = 0;
    }
    $button.parent().siblings().find("input").val(newVal);
  });
  // $(".add").on("click", function(event) {
  //   let input = 0
  //   $(".quantity").on()
  // })
});

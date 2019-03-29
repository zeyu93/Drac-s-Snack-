$(document).ready(function() {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((items) => {
    for(item of items) {
      $("<div>").text(item.name).appendTo($("body"));
      $("<div>").text(item.Price).appendTo($("body"));
    }
  });

  $("form div").append('<i class="fas fa-minus-circle"></i>');
   $("form div").append('<i class="fas fa-plus-circle"></i>');

  $(".fas.fa-plus-circle").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    var newVal = parseFloat(oldValue) + 1;
    $button.parent().find("input").val(newVal);
  });

  $(".fas.fa-minus-circle").on("click", function() {
   // Don't allow decrementing below zero
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      var newVal = 0;
    }
    $button.parent().find("input").val(newVal);
  });
  // $(".add").on("click", function(event) {
  //   let input = 0
  //   $(".quantity").on()
  // })
});

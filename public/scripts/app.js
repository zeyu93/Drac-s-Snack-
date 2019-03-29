$(document).ready(function() {

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((items) => {
  //   for(item of items) {
  //     $("<div>").text(item.name).appendTo($("body"));
  //     $("<div>").text(item.Price).appendTo($("body"));
  //   }
  // });

  $(".fas.fa-plus-circle").on("click", function() {
    var $button = $(this);
    var oldValue = parseInt($button.parent().siblings().find("span")[0].innerText);
    var newVal = parseInt(oldValue) + 1;
    $button.parent().siblings().find("span")[0].innerText = newVal;
  });

  $(".fas.fa-minus-circle").on("click", function() {
   // Don't allow decrementing below zero
    var $button = $(this);
    var oldValue = parseInt($button.parent().siblings().find("span")[0].innerText);
    if (oldValue > 0) {
      var newVal = parseInt(oldValue) - 1;
    } else {
      var newVal = 0;
    }
    $button.parent().siblings().find("span")[0].innerText = newVal;
  });

});

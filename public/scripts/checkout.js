
//query the data base to checkout page
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/users/checkout"
  }).done((items) => {
    for(item of items) {
      $("<li>").text(item).appendTo($(".summary"));
    }
  });
});

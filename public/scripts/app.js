$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((items) => {
    for(item of items) {
      $("<div>").text(item.name).appendTo($("body"));
      $("<div>").text(item.Price).appendTo($("body"));
    }  
  });
});



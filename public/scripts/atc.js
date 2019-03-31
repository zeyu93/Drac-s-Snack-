$(document).ready(function() {

  var clicked = []

  $(".atc").on("click", function() {
    // increments quantity of item
    
    var itemid = $(this).attr('id')
    $(this).attr("disabled", "disabled");
    $(this).html('Added to Cart')
    clicked.push(itemid)
    console.log('this is the items', clicked)

    localStorage.setItem('items', JSON.stringify(clicked));
    console.log(localStorage);
  })

  // $("#checkout").on("click", function() {
  //   localStorage.setItem('items', JSON.stringify(clicked));
  //   console.log(localStorage);
  // })
});

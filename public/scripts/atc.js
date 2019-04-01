//allows local storage to store item added to cart

$(document).ready(function() {

  var clicked = []

  $(".atc").on("click", function() {

    //make atc button disabled
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
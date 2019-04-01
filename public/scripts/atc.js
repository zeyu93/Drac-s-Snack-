//allows local storage to store item added to cart

$(document).ready(function() {
  var shoppingCart = {}

  $(".atc").on("click", function() {

    var itemid = $(this).attr('id');
    var item = $(this);

    console.log(item.siblings());

    //make atc button disabled

    $(this).attr("disabled");
    $(this).html('Added to Cart')
    $(this).css('background-color','red');
    shoppingCart[itemid] = {
      item_id: itemid,
      name: item.siblings()[1].innerText,
      item_quantity: 1,
      price: item.siblings()[3].innerText};

    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    console.log(localStorage);
  })

  // $("#checkout").on("click", function() {
  //   localStorage.setItem('items', JSON.stringify(clicked));
  //   console.log(localStorage);
  // })
});

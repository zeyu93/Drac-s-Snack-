$(document).ready(function() {
var cart = localStorage.getItem('cart');
shoppingCart = JSON.parse(cart);
console.log(cart);

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users/checkout"
  // }).done((items) => {
  //   for(item of items) {
  //     $("<div>").text(item).appendTo($("body"));
  //   }
  // });

  $(".fas.fa-plus-circle").on("click", function() {
    // increments quantity of item
    var $button = $(this);
    var oldValue = parseInt($button.parent().siblings().find("span")[0].innerText);
    var newVal = parseInt(oldValue) + 1;
    $button.parent().siblings().find("span")[0].innerText = newVal;

    // adds item to shopping cart
    var pathToID = $button.parent().siblings()[0].getAttribute("id");
    var pathToName = $button.parent().siblings()[0].innerText;
    var pathToPrice = $button.parent().siblings()[1].innerText;
    let item = pathToID;

    shoppingCart[item] = ({
      item_id: pathToID,
      name: pathToName,
      item_quantity: newVal,
      price: pathToPrice
    })

    console.log(shoppingCart);

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

    // remove item from shopping cart
    var pathToID = $button.parent().siblings()[0].getAttribute("id");
    let item = pathToID;

    if (shoppingCart[item] !== undefined ) {
      if (shoppingCart[item].item_quantity === 1) {
        delete shoppingCart[item];
      } else {
        shoppingCart[item].item_quantity = newVal;
      }
    }

     console.log(shoppingCart);


  });

  $("#checkout").on("click", function() {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    console.log(localStorage);
  })
});

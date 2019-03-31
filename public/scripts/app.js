$(document).ready(function() {

  let shoppingCart = {};

  if (localStorage.getItem('cart')) {
    shoppingCart = JSON.parse(localStorage.getItem('cart'));

    for (var item in shoppingCart) {
      if (shoppingCart[item].name === document.getElementById(item).innerText) {
        let test = document.getElementById(item);
        console.log($(test).siblings().find("span").text());
        console.log(shoppingCart[item].item_quantity);
        $(test).siblings().find("span").text(shoppingCart[item].item_quantity);
      }
    }

    console.log(shoppingCart);
  }

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users/checkout"
  // }).done((items) => {
  //   for(item of items) {
  //     $("<div>").text(item).appendTo($("body"));
  //   }
  // });
  $(".hide").hide();


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


  });


  $("#checkout").on("click", function() {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  })
});

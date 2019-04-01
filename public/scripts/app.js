$(document).ready(function() {

  let shoppingCart = JSON.parse(localStorage.getItem('cart'));

  if (localStorage.getItem('cart')) {

    for (var item in shoppingCart) {
      if (item == $(`#${item}`)[0].getAttribute("id")) {
        let test = document.getElementById(item);
        console.log(test);
        $(test).children().find("span").text(shoppingCart[item].item_quantity);
      } else {
        // console.log("Failed!")
      }
    }
  }

  $(".hide").hide();


  $(".fas.fa-plus-circle").on("click", function() {
    // increments quantity of item
    var $button = $(this);
    var oldValue = parseInt($button.parent().siblings().find("span")[0].innerText);
    var newVal = parseInt(oldValue) + 1;
    $button.parent().siblings().find("span")[0].innerText = newVal;

    // adds item to shopping cart
    // var pathToID = $button.parent().siblings()[0].getAttribute("id");
    var pathToName = $button.parent().siblings()[0].innerText;
    var pathToPrice = $button.parent().siblings()[1].innerText;
    let item = pathToID;

    // shoppingCart[item] = ({
    //   item_id: pathToID,
    //   name: pathToName,
    //   item_quantity: newVal,
    //   price: pathToPrice
    // })

    console.log(shoppingCart);
    var pathToID = $button.parent().parent()[0].getAttribute("id");
    shoppingCart[pathToID].item_quantity += 1;
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
    var pathToID = $button.parent().parent()[0].getAttribute("id");
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

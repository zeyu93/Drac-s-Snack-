$(document).ready(function() {
  let shoppingCart = {};

$(".add-to-cart").on("click", function() {
    var $button = $(this);
    var pathToID = $button.siblings()[1].getAttribute("id");
    let item = pathToID;
    var pathToName = $button.siblings()[1].innerText;
    var pathToPrice = $button.siblings()[3].innerText;

    if (shoppingCart[item] === undefined) {
    // adds item to shopping cart
      shoppingCart[item] = ({
        item_id: pathToID,
        name: pathToName,
        item_quantity: 1,
        price: pathToPrice
      })
    } else {
      // increments quantity of item
      shoppingCart[item].item_quantity += 1;
    }

    console.log(shoppingCart);

  });

// When we click from Menu to Order
$(".cart").on("click", function() {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  });

})
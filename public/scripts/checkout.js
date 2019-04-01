
//query the data base to checkout page
// $(document).ready(function() {
//   $.ajax({
//     method: "GET",
//     url: "/api/users/checkout"
//   }).done((items) => {
//     for(item of items) {
//       $("<li>").text(item.name).appendTo($(".summary"));
//     }
//   });
// });

//query the data base to checkout page
$(document).ready(function() {

  let cart = JSON.parse(localStorage.getItem('cart'));

  function loopThroughCart () {

    let total = 0;

    for (let item in cart) {
      $("#body").prepend(`
        <tr class="rows">
          <td>${cart[item].name}</td>
          <td>${cart[item].item_quantity}</td>
          <td>$${cart[item].price * cart[item].item_quantity}</td>
          <td><form>
                <button type="submit">Delete</button>
              </form>
        </tr>`);
      total += (cart[item].price * cart[item].item_quantity);
    }
    total = Math.round(total*100)/100
    $("#total").text(`$${total}`);

  }

  loopThroughCart();

});

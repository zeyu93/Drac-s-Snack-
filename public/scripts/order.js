  //loop through the items that were added to cart and display it on the order page;
  $(document).ready(function() {
    let items = JSON.parse(localStorage.getItem('cart'));
    if (items === null) {
      return;
    }

    function loopThroughCart () {
      for (id in items) {
        $(`#${id}`).css("display", "table-row")
      }
    }

    loopThroughCart()

  });


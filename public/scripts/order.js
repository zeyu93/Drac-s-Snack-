$(document).ready(function() {

  let items = JSON.parse(localStorage.getItem('items'));
  console.log(items)
  function loopThroughCart () {

    for (id of items) {
      $(`#${id}`).css("display", "table-row")
    }

  }

  loopThroughCart()
});

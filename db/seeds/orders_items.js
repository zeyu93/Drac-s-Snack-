exports.seed = function(knex, Promise) {
  return knex('orders_items').del()
    .then(function () {
      return Promise.all([
        knex('orders_items').insert({id: 1, item_id: '1', item_quantity: 1, created_at:'03-20-2019' , order_id: 1} ),
        knex('orders_items').insert({id: 2, item_id: '2', item_quantity: 1, created_at: '03-20-2019', order_id: 2} ),
        knex('orders_items').insert({id: 3, item_id: '3', item_quantity: 1, created_at: '03-20-2019', order_id: 3} ),
        knex('orders_items').insert({id: 4, item_id: '4', item_quantity: 1, created_at: '03-20-2019', order_id: 3} )
      ])
    });
};

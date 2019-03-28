exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders_items', function (table) {
    table.increments();
    table.integer('order_id').unsigned()
    table.foreign('order_id').references('orders.id');
    table.integer('item_id').unsigned()
    table.foreign('item_id').references('items.id');
    table.integer('item_quantity')
    table.time('created_at')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders_items');
};

exports.up = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.integer('order_id').unsigned()
    table.foreign('order_id').references('orders.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.dropColumn('order_id');
  });
};

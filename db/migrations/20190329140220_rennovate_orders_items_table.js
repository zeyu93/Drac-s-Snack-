exports.up = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.dropColumn('order_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.varchar('order_id');
  });
};

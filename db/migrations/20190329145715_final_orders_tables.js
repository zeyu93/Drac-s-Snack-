exports.up = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.dropColumn('created_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders_items', function (table) {
    table.date('created_at');
  });
};

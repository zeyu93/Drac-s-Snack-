exports.up = function(knex, Promise) {
  return knex.schema.table('orders', function (table) {
    table.dropColumn('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders', function (table) {
    table.varchar('user_id');
  });
};

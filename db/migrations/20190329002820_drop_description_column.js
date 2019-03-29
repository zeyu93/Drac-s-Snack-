exports.up = function(knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.dropColumn('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.varchar('description');
  });
};

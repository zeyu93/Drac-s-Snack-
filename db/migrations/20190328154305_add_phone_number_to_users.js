exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.integer('phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('phone');
  });
};

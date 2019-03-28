exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('description')
    table.integer('Price')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};

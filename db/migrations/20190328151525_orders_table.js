exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id');
    table.time('created_at')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};

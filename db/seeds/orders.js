exports.seed = function(knex, Promise) {
  return knex('orders').del()
    .then(function () {
      return Promise.all([
        knex('orders').insert({id: 1 }),
        knex('orders').insert({id: 2 }),
        knex('orders').insert({id: 3 })
      ]);
    });
};

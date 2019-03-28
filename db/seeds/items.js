exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 1, name: 'Ribs', description: 'red meat', Price: 9}),
        knex('items').insert({id: 2, name: 'Blood', description: 'bloody marry',Price: 9}),
        knex('items').insert({id: 3, name: 'Vampire Burgers', description: 'Juicy burger', Price: 9})
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 1, name: 'Slayer Soup', Price: 89}),
        knex('items').insert({id: 2, name: 'Blood Punch', Price: 40}),
        knex('items').insert({id: 3, name: 'Bloody Cupcakes', Price: 38}),
        knex('items').insert({id: 4, name: 'Drippy Blood Cocktail', Price: 69}),
        knex('items').insert({id: 5, name: 'Bite Shots', Price: 149}),
        knex('items').insert({id: 6, name: 'True Blood Vials', Price:9999}),
        knex('items').insert({id: 7, name: 'Fresh Bloody Hearts', Price: 1599}),
        knex('items').insert({id: 8, name: 'Flesh Rosebuds', Price:240 }),
        knex('items').insert({id: 9, name: 'Cheek Shanks with Blood Reduction', Price: 159})
      ]);
    });
};


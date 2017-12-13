exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Users').insert([
        { name: 'ronald' },
        { name: 'keven' },
        { name: 'RonGoodwin' },
        { name: 'Austin' },
        { name: 'Tyler' },
        { name: 'Luis' },
        { name: 'Christy' },
        { name: 'Mikias' },
        { name: 'Travis' },
        { name: 'Jocelyn' },
        { name: 'Susanna' },
        { name: 'Justin' },
        { name: 'Thomas' },
        { name: 'Sundro' },
        { name: 'Mark' },
        { name: 'Kia' },
        { name: 'Mark' },
        { name: 'Dan' },
        { name: 'Rashmi' },
        { name: 'Jason' },
        { name: 'Dav' },
        { name: 'Ellen' }
      ]);
    });
};

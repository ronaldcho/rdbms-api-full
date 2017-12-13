exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Tags').insert([
        { tag: 'shire' },
        { tag: 'fellowship of the ring' },
        { tag: 'frodo' },
        { tag: 'rivendell' },
        { tag: 'bree' },
        { tag: 'sam' },
        { tag: 'merry' },
        { tag: 'gimli' },
        { tag: 'Burma is near Thailand' },
        { tag: 'Southern California Fire' },
        { tag: 'Northern California last month fire' },
        { tag: 'Donald Trump is suck' },
        { tag: 'Kenny G songs are good' },
        { tag: 'Yanni music band' },
        { tag: 'Burma 8888 event change life' }
      ]);
    });
};

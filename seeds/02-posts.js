exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Posts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Posts').insert([
        {
          userId: 5,
          text:
            'Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use. '
        },
        {
          userId: 5,
          text:
            'It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface,'
        },
        {
          userId: 6,
          text:
            'full featured query and schema builders, transaction support (with savepoints),'
        }
      ]);
    });
};

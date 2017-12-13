exports.up = function(knex, Promise) {
  return knex.schema.createTable('Tags', function(tbl) {
    tbl.increments('id'); //primary key
    tbl
      .string('tag', 16)
      .notNullable()
      .unique('tag', 'uq_tag');
    tbl.timestamp('createAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Tags');
};

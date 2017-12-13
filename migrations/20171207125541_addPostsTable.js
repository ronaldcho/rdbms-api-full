exports.up = function(knex, Promise) {
  return knex.schema.createTable('Posts', function(table) {
    table.increments('id'); //primary key
    // foreign key
    table
      .integer('userId')
      .notNullable()
      .references('id')
      .inTable('Users')
      .onUpdate('CASCADE') //if a user's id is updated update this value
      .onDelete('CASCADE'); //if a user is deleted, delete her/his posts

    table.text('text').notNullable();
    table.timestamp('createAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('Posts');
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('Users', function(table) {
    table.increments('id');
    table
      .string('name', 128)
      .notNullable()
      .unique('name', 'uq_users_name');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('Users');
};

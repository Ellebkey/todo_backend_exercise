/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id');
    table.string('description').notNullable();
    table.integer('commented_by').references('id').inTable('users').onDelete('CASCADE');
    table.integer('todo_id').references('id').inTable('todos').onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};

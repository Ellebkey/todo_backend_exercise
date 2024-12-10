/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('todos', function(table) {
      table.integer('project_id').references('id').inTable('projects').onDelete('CASCADE');
      table.integer('assign_to').references('id').inTable('users').onDelete('CASCADE');
      table.integer('created_by').references('id').inTable('users').onDelete('CASCADE');
    })
    .alterTable('users', function(table) {
      table.integer('organization_id').references('id').inTable('organizations').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('todos', function(table) {
      table.dropColumn('project_id');
      table.dropColumn('assign_to');
      table.dropColumn('created_by');
    })
    .alterTable('users', function(table) {
      table.dropColumn('organization_id');
    });;
};

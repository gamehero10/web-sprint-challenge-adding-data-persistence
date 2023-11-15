/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */




exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name', 200).notNullable()
    table.text('project_description')
    table.boolean('project_completed').notNullable().defaultTo(false)
  })
  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name', 200).notNullable().unique()
    table.text('resource_description')
  })
  .createTable('tasks', table => {
    table.increments('task_id')
    table.text('task_description').notNullable()
    table.text('task_notes')
    table.boolean('task_completed').notNullable().defaultTo(false)
    table.integer('project_id')
         .unsigned()
         .notNullable()
         .references('project_id')
         .inTable('projects')
         .onUpdate('RESTRICT')
         .onDelete('RESTRICT')
  })
  .createTable('project_resources', table => {
    table.increments('project_resource_id')
    table.integer('project_id')
         .unsigned()
         .notNullable()
         .references('project_id')
         .inTable('projects')
         .onUpdate('RESTRICT')
         .onDelete('RESTRICT')
    table.integer('resource_id')
         .unsigned()
         .notNullable()
         .references('resource_id')
         .inTable('resources')
         .onUpdate('RESTRICT')
         .onDelete('RESTRICT')
         
  })

};




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};

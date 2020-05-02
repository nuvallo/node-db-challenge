exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table.boolean("completed").notNullable().defaultTo(false);
  });
  await knex.schema.createTable("resources", (table) => {
    table.increments();
    table.string("name").notNullable().unique();
    table.string("description");
  });
  await knex.schema.createTable("tasks", (table) => {
    table.increments();
    table.string("description").notNullable();
    table.string("notes");
    table.boolean("completed").notNullable().defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
  await knex.schema.createTable("resourceList", (table) => {
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")

      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("resource_id")

      .unsigned()
      .notNullable()
      .references("id")

      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resourceList");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};

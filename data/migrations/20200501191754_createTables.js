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
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};

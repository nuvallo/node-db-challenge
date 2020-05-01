exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table.boolean("completed").notNullable().defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};

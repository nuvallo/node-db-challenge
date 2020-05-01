exports.seed = async function (knex) {
  await knex("resourceList")
    .truncate()
    .then(async function () {
      // Inserts seed entries
      await knex("resourceList").insert([
        { project_id: 1, resource_id: 3 },
        { project_id: 2, resource_id: 2 },
        { project_id: 1, resource_id: 4 },
        { project_id: 3, resource_id: 1 },
      ]);
    });
};

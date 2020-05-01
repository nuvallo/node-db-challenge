exports.seed = async function (knex) {
  await knex("projects")
    .truncate()
    .then(async function () {
      await knex("projects").insert([
        {
          name: "Singing",
          description: "Sing once a day",
          completed: false,
        },
        {
          name: "Exercising",
          description: "Running marathons",
          completed: false,
        },
        {
          name: "Meditating",
          description: "Mindfulness meditation",
          completed: false,
        },
      ]);
    });
};

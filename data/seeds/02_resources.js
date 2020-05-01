exports.seed = async function (knex) {
  await knex("resources")
    .truncate()
    .then(async function () {
      await knex("resources").insert([
        { name: "Introduction to Meditating", description: "blog by John Doe" },
        {
          name: "RunningForever",
          description: "Run morning, afternoon, and night!",
        },
        { name: "Sing for the universe", description: "book by John Doe" },
        { name: "MegaMic", description: "in LA" },
      ]);
    });
};

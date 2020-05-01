exports.seed = async function (knex) {
  await knex("tasks")
    .truncate()
    .then(async function () {
      await knex("tasks").insert([
        {
          description: "Everyday Running",
          notes: "run every day",
          completed: false,
          project_id: 2,
        },
        {
          description: "Everyday meditating",
          notes: "meditate every day",
          completed: false,
          project_id: 3,
        },
        {
          description: "Everyday singing",
          notes: "sing every day ",
          completed: false,
          project_id: 1,
        },
        {
          description: "Ride a bike",
          notes: "Ride a bike every Monday, Wednesday, and Friday",
          completed: false,
          project_id: 2,
        },
        {
          description: "Sing in public",
          notes: "Sing in public every Sunday",
          completed: false,
          project_id: 1,
        },
      ]);
    });
};

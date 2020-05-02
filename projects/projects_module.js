const db = require("../data/config.js");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.project_id",
      "projects.name",
      "projects.description",
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed"
    );
}

// add projects
function addProject(project) {
  return db("projects").insert(project);
}
function addResource(resource) {
  return db("resources").insert(resource);
}
function addTask(task) {
  return db("tasks").insert(task);
}
module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask,
};

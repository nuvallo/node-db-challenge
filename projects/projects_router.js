const express = require("express");
const db = require("../projects/projects_module");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await db.getProjects());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json(await db.getProjectById(req.params.id));
  } catch (error) {}
});

router.get("/resources", async (req, res, next) => {
  try {
    res.status(200).json(await db.getResources());
  } catch (error) {
    next(error);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    res.status(200).json(await db.getTasks());
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(200).json(await db.addProject(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    res.status(200).json(await db.addResource(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/tasks", async (req, res, next) => {
  try {
    res.status(200).json(await db.addTask(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;

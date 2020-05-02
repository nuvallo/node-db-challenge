const express = require("express");
const projectsRouter = require("../projects/projects_router");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Welcome to API" });
});

server.use("/api/projects", projectsRouter);

module.exports = server;

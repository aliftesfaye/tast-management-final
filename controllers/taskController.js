const taskModel = require("../models/taskModel");

const getAllTasksPage = (req, res) => {
  taskModel.getAllTasks((err, rows) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    res.render("tasks", { tasks: rows });
  });
};

const getTaskByIdPage = (req, res) => {
  const id = parseInt(req.params.id, 10);
  taskModel.getTaskById(id, (err, row) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    if (row) {
      res.render("task", { task: row });
    } else {
      res.status(404).render("404", { error: "Task not found" });
    }
  });
};

const getTaskForEditPage = (req, res) => {
  const id = parseInt(req.params.id, 10);
  taskModel.getTaskById(id, (err, row) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    if (row) {
      res.render("editTask", { task: row });
    } else {
      res.status(404).render("404", { error: "Task not found" });
    }
  });
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  console.log(req);
  taskModel.createTask(title, description, (err, id) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    res.redirect("/tasks");
  });
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, description } = req.body;
  taskModel.updateTask(id, title, description, (err, changes) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    if (changes > 0) {
      res.redirect(`/tasks/${id}`);
    } else {
      res.status(404).render("404", { error: "Task not found" });
    }
  });
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id, 10);
  taskModel.deleteTask(id, (err, changes) => {
    if (err) {
      return res.status(500).render("404", { error: "Internal Server Error" });
    }
    if (changes > 0) {
      res.redirect("/tasks");
    } else {
      res.status(404).render("404", { error: "Task not found" });
    }
  });
};

module.exports = {
  getAllTasksPage,
  getTaskByIdPage,
  getTaskForEditPage,
  createTask,
  updateTask,
  deleteTask,
};

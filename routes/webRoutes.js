const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Web page routes
router.get("/", taskController.getAllTasksPage);
router.get("/tasks", taskController.getAllTasksPage);
router.get("/tasks/new", (req, res) => res.render("createTask"));
router.get("/tasks/:id", taskController.getTaskByIdPage);
router.get("/tasks/:id/edit", taskController.getTaskForEditPage);

module.exports = router;

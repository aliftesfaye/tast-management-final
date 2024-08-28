const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskApiController");

// API routes
router.get("/tasks", taskController.getAllTasks);
router.post("/tasks", taskController.createTask);
router.get("/tasks/:id", taskController.getTaskById);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;

const express = require("express");

const { createTask, getTasks, getSingleTask, updatedTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask)

router.get("/",getTasks)

router.get("/:id",getSingleTask)

router.patch("/:id",updatedTask)

router.delete("/:id",deleteTask)

module.exports = router;
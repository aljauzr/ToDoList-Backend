const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Get All Task
router.get("/", controller.findAll);

// Create New Task
router.post("/", controller.create);

// Get Task by Id
router.get("/:id", controller.findById);

// Update a Task based on TaskId
router.put("/:id", controller.update);

// Delete a Task based on TaskId
router.delete("/:id", controller.delete);

module.exports = router;
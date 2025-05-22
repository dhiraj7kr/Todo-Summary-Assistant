const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const summaryController = require('../controllers/summaryController');

router.get('/todos', todoController.getTodos);
router.get('/todos', async (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  if (req.query.priority) filter.priority = req.query.priority;

  const todos = await Todo.find(filter);
  res.json(todos);
});
router.post('/todos', todoController.addTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.post('/summarize', summaryController.summarizeAndSend);

module.exports = router;

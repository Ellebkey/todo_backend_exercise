const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');
const authVerification = require('../middleware/authentication.middleware');

router.route('/')
  .all(authVerification.checkAuth)
  .get(todosController.getAllTodos)
  .post(todosController.postTodo)
  .delete(todosController.deleteAllTodos);

router.get('/:id', todosController.getTodo);
router.patch('/:id', todosController.patchTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;

const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.get('/', todosController.getAllTodos);
// app.get('/', routes.getAllTodos);
// app.get('/:id', routes.getTodo);
//
// app.post('/', routes.postTodo);
// app.patch('/:id', routes.patchTodo);
//
// app.delete('/', routes.deleteAllTodos);
// app.delete('/:id', routes.deleteTodo);

module.exports = router;

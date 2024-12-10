const TodoService = require('../services/todos.service');

class TodosController {
  async getAllTodos(req, res, next) {
    try {
      // get database information
      const todoList = await TodoService.getAllTodos()
      res.json({
        message: 'success',
        data: todoList
      });
    } catch (e) {
      next(e);
    }
  }

  getTodo(req, res, next) {

  }
  postTodo(req, res, next) {

  }
  patchTodo(req, res, next) {}
  deleteAllTodos(req, res, next) {}
  deleteTodo(req, res, next) {}
}

module.exports = new TodosController();

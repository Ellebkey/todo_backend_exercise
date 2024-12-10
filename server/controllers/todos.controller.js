class TodosController {
  getAllTodos(req, res, next) {
    try {
      res.json({
        message: 'success',
        data: {
          todos: [] // replace with actual data
        }
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TodosController();

const knex = require("../database/connection.js");

class TodoService {
  async getAllTodos() {
    return knex("todos");
  }
}

module.exports = new TodoService();
